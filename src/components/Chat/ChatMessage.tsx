import React from "react";

export interface Message {
  role: "user" | "assistant";
  content: string;
  context?: string | null; // Опциональное поле для контекста может быть строкой или null
}

interface ChatMessageProps {
  message: Message;
  onContextClick?: (context: string) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  onContextClick,
}) => {
  // Простая функция для базового форматирования текста
  const formatText = (text: string): string => {
    let formatted = text;

    // Экранируем HTML-теги
    formatted = formatted.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Форматирование жирного текста
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Форматирование курсива
    formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Форматирование кода
    formatted = formatted.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Преобразование переводов строк в <br>
    formatted = formatted.replace(/\n/g, "<br>");

    return formatted;
  };

  const formatMessage = (content: string) => {
    // Проверка на ошибку
    if (message.role === "assistant" && content.startsWith("Error:")) {
      return (
        <>
          <div className="text-red-600 text-left">{content}</div>
          <button className="mt-2.5 py-1.5 px-3 bg-gray-800 text-white font-medium border-none rounded-md cursor-pointer text-sm transition-all duration-200 ease-in-out block hover:bg-gray-700">
            Retry
          </button>
        </>
      );
    }

    // Форматируем текст
    const formattedContent = formatText(content);

    // Если есть контекст, добавляем кнопку в конец текста сообщения
    if (message.context && message.role === "user") {
      return (
        <>
          <div
            className="message-content cognify-markdown-content"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
          <span
            className="inline-flex items-center bg-black text-white rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#00b8dd] hover:-translate-y-0.5 active:translate-y-0"
            onClick={() =>
              onContextClick && message.context
                ? onContextClick(message.context)
                : null
            }
          >
            Context
          </span>
        </>
      );
    }

    return (
      <div
        className="cognify-markdown-content"
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    );
  };

  return (
    <div
      className={`p-3 my-2 rounded-xl max-w-[85%] text-sm leading-6 break-words shadow-sm animate-[fadeInMessage_0.3s_ease-out] 
      ${
        message.role === "user"
          ? "bg-[hsla(0,0%,91%,0.5)] text-gray-900 self-end ml-auto text-left shadow-none rounded-[12px_12px_0_12px]"
          : "bg-transparent text-gray-900 self-start text-left mr-auto max-w-[95%] w-auto shadow-none rounded-[12px_12px_12px_0] border-l-0 pl-3"
      }`}
    >
      {formatMessage(message.content)}
    </div>
  );
};

export default ChatMessage;
