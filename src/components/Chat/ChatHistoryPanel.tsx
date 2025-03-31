import React, { useState } from "react";

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
}

const ChatHistoryPanel: React.FC<ChatHistoryPanelProps> = ({
  chats,
  onChatSelect,
  onChatDelete,
  onClose,
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

  return (
    <div className="absolute inset-0 bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] z-[10002] overflow-hidden flex flex-col animate-fadeIn">
      <div className="flex justify-between items-center p-5 px-6 border-b border-[rgba(0,0,0,0.1)] h-[60px] box-border">
        <h3 className="m-0 text-base font-semibold text-gray-900">
          История чатов
        </h3>
        <button
          className="bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
          onClick={onClose}
        >
          ×
        </button>
      </div>

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
    </div>
  );
};

export default ChatHistoryPanel;
