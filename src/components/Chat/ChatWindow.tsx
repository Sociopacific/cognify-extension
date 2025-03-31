import React, { useState, useRef, useEffect } from "react";
import ChatMessage, { Message } from "./ChatMessage";
import { CognifyResources, getResourcesFromContainer } from "../../types";
import ContextPanel from "./ContextPanel";
import ChatHistoryPanel from "./ChatHistoryPanel";

interface ChatItem {
  id: string;
  title: string;
  createdAt: number;
}

interface ChatWindowProps {
  title: string;
  messages: Message[];
  onSendMessage: (message: string) => void;
  onClose: () => void;
  onShowHistory: () => void;
  isLoading?: boolean;
  error?: string | null;
  showHistory?: boolean;
  chats?: ChatItem[];
  onChatSelect?: (id: string) => void;
  onChatDelete?: (id: string) => void;
  onCloseHistory?: () => void;
  onNewChat?: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  title,
  messages,
  onSendMessage,
  onClose,
  onShowHistory,
  isLoading = false,
  error = null,
  showHistory = false,
  chats = [],
  onChatSelect,
  onChatDelete,
  onCloseHistory,
  onNewChat = () => {},
}) => {
  const [inputValue, setInputValue] = useState("");
  const [resources, setResources] = useState<CognifyResources | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [showContext, setShowContext] = useState(false);
  const [currentContext, setCurrentContext] = useState<string | null>(null);

  // Получаем пути к иконкам при монтировании компонента
  useEffect(() => {
    const containerResources = getResourcesFromContainer();
    if (containerResources) {
      setResources(containerResources);
      console.log("[Cognify React] ChatWindow: ресурсы получены");
    } else {
      console.error("[Cognify React] ChatWindow: не удалось получить ресурсы");
    }
  }, []);

  // Прокрутка вниз при новых сообщениях
  useEffect(() => {
    if (messagesContainerRef.current && !showHistory && !showContext) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, showHistory, showContext]);

  // Фокус на поле ввода при открытии
  useEffect(() => {
    if (inputRef.current && !showHistory && !showContext) {
      inputRef.current.focus();
    }
  }, [showHistory, showContext]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  const handleDeleteClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (deleteConfirmId === id) {
      onChatDelete?.(id);
      setDeleteConfirmId(null);
    } else {
      setDeleteConfirmId(id);
    }
  };

  const handleContextClick = (context: string) => {
    setCurrentContext(context);
    setShowContext(true);
  };

  const handleCloseContext = () => {
    setShowContext(false);
    setCurrentContext(null);
  };

  // Обработчик для создания нового чата
  const handleNewChat = () => {
    onNewChat(); // Вызываем переданный обработчик
    setInputValue(""); // Очищаем поле ввода
    if (inputRef.current) inputRef.current.focus(); // Фокус на поле ввода
  };

  // Если ресурсы не загружены, показываем заглушку
  if (!resources) {
    return (
      <div
        className="chat-window"
        style={{ padding: "20px", textAlign: "center" }}
      >
        Loading chat interface...
      </div>
    );
  }

  return (
    <div
      className="chat-window bg-white shadow-xl rounded-[32px] overflow-hidden flex flex-col"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "350px",
        height: "calc(100vh - 40px)",
        maxHeight: "calc(100vh - 40px)",
        zIndex: 2147483647,
        pointerEvents: "auto" as React.CSSProperties["pointerEvents"],
      }}
    >
      {showHistory && (
        <ChatHistoryPanel
          chats={chats}
          onChatSelect={onChatSelect || (() => {})}
          onChatDelete={onChatDelete || (() => {})}
          onClose={onCloseHistory || (() => {})}
          onCloseWindow={onClose}
          onNewChat={handleNewChat}
        />
      )}

      {showContext && currentContext && (
        <ContextPanel
          context={currentContext}
          onClose={handleCloseContext}
          onCloseWindow={onClose}
        />
      )}

      {!showHistory && !showContext && (
        <>
          <div className="flex justify-between items-center p-5 px-6 bg-white text-gray-900 font-semibold text-base border-b border-[rgba(0,0,0,0.1)] h-[60px] box-border">
            <div className="flex items-center gap-2.5">
              <img
                src={resources.iconUrl}
                alt={title}
                className="w-5 h-5 filter brightness-0"
              />
              <span>{title}</span>
              <button
                className="ml-2.5 bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
                onClick={handleNewChat}
                title="Новый чат"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
                onClick={onShowHistory}
                title="История чатов"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button
              className="bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div className="flex flex-col h-[calc(100%-60px)] max-h-full flex-grow">
            <div
              ref={messagesContainerRef}
              className="flex-grow overflow-y-auto py-2.5 px-5 flex flex-col scrollbar-hide"
            >
              {messages.length === 0 ? (
                <div className="text-gray-500 text-center my-auto text-sm">
                  Задайте ваш вопрос или используйте функцию перевода/объяснения
                  при выделении текста
                </div>
              ) : (
                messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message}
                    onContextClick={handleContextClick}
                  />
                ))
              )}

              {isLoading && (
                <div className="typing-indicator self-start bg-gray-100 p-3 my-2 rounded-xl">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              )}

              {error && (
                <div className="bg-red-100 text-red-700 p-3 my-2 rounded-xl text-sm">
                  {error}
                </div>
              )}
            </div>

            <form
              className="flex p-4 border-t border-[rgba(0,0,0,0.1)] bg-white box-border items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="flex-grow border border-gray-200 rounded-3xl px-4 py-2.5 text-sm outline-none font-sans transition-all duration-200 ease-in-out h-[42px] box-border text-left focus:border-gray-800 focus:border-2 focus:shadow-none disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
                placeholder={
                  isLoading
                    ? "Waiting for response..."
                    : "Type your question..."
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={inputRef}
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`ml-2 p-0 bg-gray-800 text-white font-medium border-none rounded-full cursor-pointer font-sans text-sm transition-all duration-200 ease-in-out h-[42px] w-[42px] flex items-center justify-center hover:bg-gray-700 active:scale-95 ${
                  isLoading
                    ? "bg-gray-200 cursor-not-allowed hover:bg-gray-200"
                    : ""
                }`}
                disabled={isLoading || !inputValue.trim()}
              >
                <img
                  src={resources.sendIconUrl}
                  alt="Send"
                  width="20"
                  height="20"
                  className="filter brightness-0 invert"
                />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatWindow;
