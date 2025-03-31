import React, { useState } from "react";
import PanelWrapper from "./PanelWrapper";

interface ChatItem {
  id: string;
  title: string;
  createdAt: number;
}

interface ChatHistoryPanelProps {
  chats: ChatItem[];
  onChatSelect: (id: string) => void;
  onChatDelete: (id: string) => void;
  onClose: () => void;
  onCloseWindow?: () => void;
  onNewChat?: () => void;
}

const ChatHistoryPanel: React.FC<ChatHistoryPanelProps> = ({
  chats,
  onChatSelect,
  onChatDelete,
  onClose,
  onCloseWindow,
  onNewChat,
}) => {
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

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
      onChatDelete(id);
      setDeleteConfirmId(null);
    } else {
      setDeleteConfirmId(id);
    }
  };

  // Обработчик для создания нового чата
  const handleNewChat = () => {
    onClose(); // Закрываем панель истории
    if (onNewChat) onNewChat(); // Вызываем переданный обработчик если он есть
  };

  return (
    <PanelWrapper
      title="История чатов"
      onClose={onClose}
      onCloseWindow={onCloseWindow}
    >
      <div className="flex flex-col h-full">
        <div className="overflow-y-auto py-2.5 flex-grow scrollbar-hide">
          {chats.length === 0 ? (
            <div className="text-gray-600 text-center p-7 text-sm">
              У вас пока нет сохраненных чатов
            </div>
          ) : (
            chats.map((chat) => (
              <div
                key={chat.id}
                className="flex justify-between items-center p-3 px-5 border-b border-[rgba(0,0,0,0.05)] cursor-pointer transition-colors duration-200 hover:bg-gray-50"
                onClick={() => onChatSelect(chat.id)}
              >
                <div className="flex-grow overflow-hidden">
                  <div className="text-[14px] text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    {chat.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {formatDate(chat.createdAt)}
                  </div>
                </div>
                <button
                  className={`bg-transparent border border-gray-300 py-1.5 px-2.5 rounded-md text-xs cursor-pointer transition-all duration-200 hover:bg-gray-100 ${
                    deleteConfirmId === chat.id
                      ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
                      : "text-gray-600"
                  }`}
                  onClick={(e) => handleDeleteClick(e, chat.id)}
                >
                  {deleteConfirmId === chat.id ? "Подтвердить" : "Удалить"}
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-[rgba(0,0,0,0.05)] bg-white sticky bottom-0 left-0 right-0">
          <button
            className="w-full py-3 bg-gray-900 text-white font-medium rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-95"
            onClick={handleNewChat}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current"
            >
              <path
                d="M12 4V20M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Новый чат</span>
          </button>
        </div>
      </div>
    </PanelWrapper>
  );
};

export default ChatHistoryPanel;
