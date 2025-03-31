import React, { useState, useEffect } from "react";
import ReactShadowRoot from "react-shadow-root";
import { loadTailwindStyles } from "../utils/styles";
import ButtonsPanel from "./ButtonsPanel/ButtonsPanel";
import FloatButton from "./FloatButton/FloatButton";
import ChatWindow from "./Chat/ChatWindow";
import ApiKeyModal from "./ApiKeyModal";
import { getResourcesFromContainer } from "../types";
import { hasApiKey, saveApiKey, sendChatRequest } from "../api/openai";
import {
  getChatHistory,
  saveChatHistory,
  deleteChat,
  ChatHistoryItem,
} from "../api/storage";
import { getLimitedContextFromSelection, getPageText } from "../utils/context";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  context?: string | null;
}

const ExtensionApp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [apiKeyLoaded, setApiKeyLoaded] = useState(false);
  const [tailwindStyles, setTailwindStyles] = useState<string>("");
  const [selectedText, setSelectedText] = useState("");
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const [originalSelectionRect, setOriginalSelectionRect] =
    useState<DOMRect | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [chats, setChats] = useState<ChatHistoryItem[]>([]);
  const resources = getResourcesFromContainer();

  // Обновленный обработчик события выделения текста
  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      // Проверяем, находится ли выделение внутри элемента расширения
      let isInsideExtension = false;

      // Получаем элемент, в котором находится выделение
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let node = range.commonAncestorContainer;

        // Проходим вверх по DOM-дереву, чтобы найти #cognify-extension-root
        while (node && node !== document.body) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (
              element.id === "cognify-extension-root" ||
              element.closest("#cognify-extension-root")
            ) {
              isInsideExtension = true;
              break;
            }
          }
          node = node.parentNode as Node;
        }
      }

      // Если выделение внутри расширения, просто игнорируем его
      if (isInsideExtension) {
        return;
      }

      const text = selection.toString().trim();
      setSelectedText(text);

      // Получаем координаты выделения
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Используем requestAnimationFrame для более плавного обновления позиции
        requestAnimationFrame(() => {
          // Сохраняем позицию относительно viewport, а не страницы
          setSelectionPosition({
            x: rect.left,
            y: rect.bottom + 10, // Небольшой отступ снизу
          });

          // Показываем панель только если она еще не видна
          if (!showButtons) {
            setShowButtons(true);
          }
        });
      }
    } else {
      // Если нет выделения, скрываем панель
      setShowButtons(false);
    }
  };

  // Обработчик прокрутки, обновляющий позицию панели относительно исходного выделения
  const handleScroll = () => {
    if (showButtons) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        // Получаем текущее положение выделения относительно viewport
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Используем requestAnimationFrame для более плавного обновления
        requestAnimationFrame(() => {
          // Обновляем позицию панели в соответствии с текущим положением выделения
          setSelectionPosition({
            x: rect.left,
            y: rect.bottom + 10,
          });
        });
      }
    }
  };

  useEffect(() => {
    // Загружаем стили Tailwind при монтировании компонента
    loadTailwindStyles()
      .then((styles) => {
        setTailwindStyles(styles);
        console.log("Стили Tailwind успешно загружены");
      })
      .catch((error) => {
        console.error("Ошибка при загрузке стилей Tailwind:", error);
      });

    // Проверяем наличие API ключа, но не открываем модальное окно автоматически
    hasApiKey().then((exists) => {
      setApiKeyLoaded(exists);
      // Удаляем автоматическое открытие модального окна
    });

    // Имитация задержки загрузки компонента
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Вешаем обработчик на событие mouseup
    document.addEventListener("mouseup", handleSelectionChange);

    // Вешаем обработчик на событие selectionchange
    document.addEventListener("selectionchange", handleSelectionChange);

    // Добавляем обработчик прокрутки
    window.addEventListener("scroll", handleScroll);

    // Удаляем обработчики при размонтировании
    return () => {
      document.removeEventListener("mouseup", handleSelectionChange);
      document.removeEventListener("selectionchange", handleSelectionChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showButtons, originalSelectionRect]);

  // Загружаем историю чатов при монтировании
  useEffect(() => {
    const loadHistory = async () => {
      const history = await getChatHistory();
      setChats(history);
    };
    loadHistory();
  }, []);

  // Обработчики событий
  const handleOpenChat = () => {
    if (!apiKeyLoaded) {
      setShowApiKeyModal(true);
    } else {
      setShowChat(true);
    }
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  // Обработчик для запроса API ключа
  const handleRequestApiKey = () => {
    // Отмечаем, что открыто модальное окно
    document.body.classList.add("modal-open");
    setShowApiKeyModal(true);
  };

  // Обновляем обработчик отмены ввода API ключа
  const handleApiKeyCancel = () => {
    document.body.classList.remove("modal-open");
    setShowApiKeyModal(false);
  };

  // Обновляем обработчик отправки API ключа
  const handleApiKeySubmit = async (apiKey: string) => {
    try {
      await saveApiKey(apiKey);
      setApiKeyLoaded(true);
      document.body.classList.remove("modal-open");
      setShowApiKeyModal(false);
      setShowChat(true);
    } catch (error) {
      console.error("Ошибка при сохранении API ключа:", error);
      setError("Не удалось сохранить API ключ");
    }
  };

  // Функция для получения контекста в зависимости от настроек
  const getContext = (
    selection: Selection,
    useWideContext: boolean
  ): string | null => {
    if (!selection) return null;

    if (useWideContext) {
      // Если включен Full Page Context, возвращаем весь текст страницы
      return getPageText();
    } else {
      // Иначе возвращаем ограниченный контекст
      return getLimitedContextFromSelection(selection);
    }
  };

  const handleExplain = async (
    text: string,
    useApi: boolean,
    useWideContext: boolean
  ) => {
    console.log("Объяснение: ", text, useApi, useWideContext);

    // Если API режим выключен, открываем ChatGPT в новом окне
    if (!useApi) {
      const query = encodeURIComponent(`Объясни: "${text}"`);
      window.open(`https://chat.openai.com/chat?q=${query}`, "_blank");
      return;
    }

    if (!apiKeyLoaded) {
      setShowApiKeyModal(true);
      return;
    }

    // Получаем контекст текущего выделения
    const selection = window.getSelection();
    const context = getContext(selection!, useWideContext);

    // Создаем новый чат
    const newChat: ChatHistoryItem = {
      id: Date.now().toString(),
      title: `Объяснение: ${text.slice(0, 50)}${text.length > 50 ? "..." : ""}`,
      createdAt: Date.now(),
      messages: [],
    };

    // Добавляем сообщение пользователя
    const userMessage: ChatMessage = {
      role: "user",
      content: `Объясни: "${text}"`,
      context: context,
    };
    newChat.messages.push(userMessage);

    // Немедленно открываем чат и показываем сообщение пользователя
    setShowChat(true);
    setMessages([userMessage]);
    setError(null);

    // Отправляем запрос к API
    setIsProcessing(true);
    try {
      const response = await sendChatRequest([userMessage]);
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response,
      };
      newChat.messages.push(assistantMessage);

      // Сохраняем новый чат
      await saveChatHistory([...chats, newChat]);
      setChats((prev) => [...prev, newChat]);
      setMessages([userMessage, assistantMessage]);
    } catch (error) {
      console.error("Ошибка при получении ответа:", error);
      if (
        (error as Error).message === "API key not found" ||
        (error as Error).message === "API key is invalid"
      ) {
        setShowApiKeyModal(true);
        setError("Необходим валидный API ключ");
      } else {
        setError(`Ошибка: ${(error as Error).message}`);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTranslate = async (
    text: string,
    useApi: boolean,
    useWideContext: boolean
  ) => {
    console.log("Перевод: ", text, useApi, useWideContext);

    // Если API режим выключен, открываем ChatGPT в новом окне
    if (!useApi) {
      const query = encodeURIComponent(`Переведи: "${text}"`);
      window.open(`https://chat.openai.com/chat?q=${query}`, "_blank");
      return;
    }

    if (!apiKeyLoaded) {
      setShowApiKeyModal(true);
      return;
    }

    // Получаем контекст текущего выделения
    const selection = window.getSelection();
    const context = getContext(selection!, useWideContext);

    // Создаем новый чат
    const newChat: ChatHistoryItem = {
      id: Date.now().toString(),
      title: `Перевод: ${text.slice(0, 50)}${text.length > 50 ? "..." : ""}`,
      createdAt: Date.now(),
      messages: [],
    };

    // Добавляем сообщение пользователя
    const userMessage: ChatMessage = {
      role: "user",
      content: `Переведи: "${text}"`,
      context: context,
    };
    newChat.messages.push(userMessage);

    // Немедленно открываем чат и показываем сообщение пользователя
    setShowChat(true);
    setMessages([userMessage]);
    setError(null);

    // Отправляем запрос к API
    setIsProcessing(true);
    try {
      const response = await sendChatRequest([userMessage]);
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response,
      };
      newChat.messages.push(assistantMessage);

      // Сохраняем новый чат
      await saveChatHistory([...chats, newChat]);
      setChats((prev) => [...prev, newChat]);
      setMessages([userMessage, assistantMessage]);
    } catch (error) {
      console.error("Ошибка при получении ответа:", error);
      if (
        (error as Error).message === "API key not found" ||
        (error as Error).message === "API key is invalid"
      ) {
        setShowApiKeyModal(true);
        setError("Необходим валидный API ключ");
      } else {
        setError(`Ошибка: ${(error as Error).message}`);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleShowHistory = () => {
    setShowHistory(true);
  };

  const handleCloseHistory = () => {
    setShowHistory(false);
  };

  const handleChatSelect = async (id: string) => {
    const selectedChat = chats.find((chat) => chat.id === id);
    if (selectedChat) {
      setMessages(selectedChat.messages);
      setShowHistory(false);
    }
  };

  const handleChatDelete = async (id: string) => {
    try {
      await deleteChat(id);
      setChats((prev) => prev.filter((chat) => chat.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении чата:", error);
      setError("Не удалось удалить чат");
    }
  };

  // Обновляем handleSendMessage для сохранения истории
  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isProcessing) return;

    const newUserMessage: ChatMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsProcessing(true);
    setError(null);

    try {
      const response = await sendChatRequest([...messages, newUserMessage]);
      const newAssistantMessage: ChatMessage = {
        role: "assistant",
        content: response,
      };
      const updatedMessages = [
        ...messages,
        newUserMessage,
        newAssistantMessage,
      ];
      setMessages(updatedMessages);

      // Сохраняем чат в историю
      const newChat: ChatHistoryItem = {
        id: Date.now().toString(),
        title: message.slice(0, 50) + (message.length > 50 ? "..." : ""),
        createdAt: Date.now(),
        messages: updatedMessages,
      };
      await saveChatHistory([...chats, newChat]);
      setChats((prev) => [...prev, newChat]);
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      if (
        (error as Error).message === "API key not found" ||
        (error as Error).message === "API key is invalid"
      ) {
        setShowApiKeyModal(true);
        setError("Необходим валидный API ключ");
      } else {
        setError(`Ошибка: ${(error as Error).message}`);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Добавляем явный обработчик для закрытия панели кнопок
  const handleCloseButtonsPanel = () => {
    setShowButtons(false);
  };

  // Обработчик для создания нового чата
  const handleNewChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div
      className="extension-app"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2147483646,
        pointerEvents: "none",
      }}
    >
      <ReactShadowRoot stylesheetAttributes={{ pointerEvents: "none" }}>
        <style>
          {tailwindStyles}

          {/* Добавляем анимации */}
          {`@keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes fadeInMessage {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          }`}
        </style>

        <div
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {isLoading && (
            <div
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px 20px",
                background: "rgba(0, 0, 0, 0.7)",
                color: "white",
                borderRadius: "8px",
                zIndex: 2147483647,
                animation: "fadeIn 0.3s ease-in-out",
                pointerEvents: "auto",
              }}
            >
              Загрузка...
            </div>
          )}

          {showButtons && selectedText && resources && (
            <ButtonsPanel
              selectedText={selectedText}
              position={selectionPosition}
              onExplain={handleExplain}
              onTranslate={handleTranslate}
              onClose={handleCloseButtonsPanel}
              onRequestApiKey={handleRequestApiKey}
            />
          )}

          {resources && (
            <FloatButton onClick={handleOpenChat} icon={resources.iconUrl} />
          )}

          {showChat && (
            <ChatWindow
              title="Cognify Chat"
              messages={messages}
              onSendMessage={handleSendMessage}
              onClose={handleCloseChat}
              onShowHistory={handleShowHistory}
              isLoading={isProcessing}
              error={error}
              showHistory={showHistory}
              chats={chats}
              onChatSelect={handleChatSelect}
              onChatDelete={handleChatDelete}
              onCloseHistory={handleCloseHistory}
              onNewChat={handleNewChat}
            />
          )}

          <ApiKeyModal
            isVisible={showApiKeyModal}
            onSubmit={handleApiKeySubmit}
            onCancel={handleApiKeyCancel}
          />
        </div>
      </ReactShadowRoot>
    </div>
  );
};

export default ExtensionApp;
