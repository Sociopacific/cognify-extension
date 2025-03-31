import React, { useState, useRef, useEffect } from "react";
import ChatMessage, { Message } from "./ChatMessage";
import { CognifyResources, getResourcesFromContainer } from "../../types";
import ContextModal from "./ContextModal";

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

  // Определяем заголовок в зависимости от текущего режима
  let headerTitle = title;
  if (showHistory) {
    headerTitle = "Chat history";
  } else if (showContext) {
    headerTitle = "Context";
  }

  return (
    <div
      className="chat-window bg-white shadow-xl rounded-[32px] overflow-hidden flex flex-col"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "350px",
        height: "500px",
        zIndex: 2147483647,
        pointerEvents: "auto" as React.CSSProperties["pointerEvents"],
      }}
    >
      <div className="flex justify-between items-center p-5 px-6 bg-white text-gray-900 font-semibold text-base border-b border-[rgba(0,0,0,0.1)] h-[60px] box-border">
        <div className="flex items-center gap-2.5">
          <img
            src={resources.iconUrl}
            alt={title}
            className="w-5 h-5 filter brightness-0"
          />
          <span>{headerTitle}</span>

          {!showHistory && !showContext && (
            <button
              className="ml-2.5 bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
              onClick={onShowHistory}
              title="Chat history"
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
          )}

          {(showHistory || showContext) && (
            <button
              className="ml-2.5 bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
              onClick={showHistory ? onCloseHistory : handleCloseContext}
              title="Back to chat"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        <button
          className="bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div className="flex flex-col h-[calc(100%-60px)] max-h-full flex-grow">
        {!showHistory && !showContext ? (
          <>
            <div
              className="p-4 px-5 overflow-y-auto leading-relaxed text-[15px] text-gray-700 scrollbar-hide flex flex-col flex-grow text-left"
              ref={messagesContainerRef}
            >
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message}
                  onContextClick={handleContextClick}
                />
              ))}

              {isLoading && (
                <div className="flex items-center justify-start p-4 my-2.5 text-sm text-gray-600 text-left">
                  <div className="inline-block w-5 h-5 border-2 border-[rgba(0,0,0,0.1)] rounded-full border-t-gray-800 animate-spin mr-2.5"></div>
                  <span>Getting response...</span>
                </div>
              )}

              {error && !isLoading && messages.length === 0 && (
                <div className="flex items-center p-3 px-4 my-2.5 bg-[rgba(255,0,0,0.05)] border border-[rgba(255,0,0,0.2)] rounded-lg text-red-600 text-sm text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>{error}</span>
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
          </>
        ) : showHistory ? (
          <div className="flex flex-col overflow-y-auto flex-grow py-2.5 scrollbar-hide">
            {chats.length === 0 ? (
              <div className="p-5 text-center text-gray-600 text-sm">
                You don't have any saved chats yet
              </div>
            ) : (
              <div className="flex flex-col w-full">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex justify-between items-center p-3 px-5 border-b border-[rgba(0,0,0,0.05)] cursor-pointer transition-colors duration-200 hover:bg-gray-50"
                    onClick={() => onChatSelect?.(chat.id)}
                  >
                    <div className="flex-grow overflow-hidden">
                      <div className="text-[15px] font-medium text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {chat.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {formatDate(chat.createdAt)}
                      </div>
                    </div>
                    <button
                      className={`bg-transparent border-none text-gray-600 cursor-pointer py-1.5 px-2.5 rounded text-xs opacity-80 transition-all duration-200 hover:bg-[rgba(0,0,0,0.05)] hover:opacity-100 ${
                        deleteConfirmId === chat.id
                          ? "bg-red-700 text-white hover:bg-red-800"
                          : ""
                      }`}
                      onClick={(e) => handleDeleteClick(e, chat.id)}
                    >
                      {deleteConfirmId === chat.id ? "Confirm" : "Delete"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <ContextModal context={currentContext} onClose={handleCloseContext} />
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
