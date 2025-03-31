import React, { useState, useEffect } from "react";
import ReactShadowRoot from "react-shadow-root";
import { loadTailwindStyles } from "../utils/styles";
import ButtonsPanel from "./ButtonsPanel/ButtonsPanel";
import FloatButton from "./FloatButton/FloatButton";
import ChatWindow from "./Chat/ChatWindow";
import ApiKeyModal from "./ApiKeyModal";
import { getResourcesFromContainer } from "../types";
import { hasApiKey, saveApiKey, sendChatRequest } from "../api/openai";

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
  const [messages, setMessages] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resources = getResourcesFromContainer();

  // Добавляем обработчик события выделения текста
  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
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

  const handleExplain = async (
    text: string,
    useApi: boolean,
    useContext: boolean
  ) => {
    console.log("Объяснение: ", text, useApi, useContext);

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

    setShowChat(true);
    setError(null);

    // Добавляем сообщение пользователя
    const userMessage = `Объясни: "${text}"`;
    const newUserMessage = { role: "user" as const, content: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);

    // Отправляем запрос к API
    setIsProcessing(true);
    try {
      const response = await sendChatRequest([...messages, newUserMessage]);
      setMessages((prev) => [
        ...prev,
        { role: "assistant" as const, content: response },
      ]);
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
    useContext: boolean
  ) => {
    console.log("Перевод: ", text, useApi, useContext);

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

    setShowChat(true);
    setError(null);

    // Добавляем сообщение пользователя
    const userMessage = `Переведи: "${text}"`;
    const newUserMessage = { role: "user" as const, content: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);

    // Отправляем запрос к API
    setIsProcessing(true);
    try {
      const response = await sendChatRequest([...messages, newUserMessage]);
      setMessages((prev) => [
        ...prev,
        { role: "assistant" as const, content: response },
      ]);
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

  const handleSendMessage = async (message: string) => {
    console.log("Отправка сообщения: ", message);

    // Для обычных сообщений в чате всегда используем API
    if (!apiKeyLoaded) {
      setShowApiKeyModal(true);
      return;
    }

    setError(null);

    // Добавляем сообщение пользователя
    const newUserMessage = { role: "user" as const, content: message };
    setMessages((prev) => [...prev, newUserMessage]);

    // Отправляем запрос к API
    setIsProcessing(true);
    try {
      const response = await sendChatRequest([...messages, newUserMessage]);
      setMessages((prev) => [
        ...prev,
        { role: "assistant" as const, content: response },
      ]);
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

  // Создаем отдельный обработчик для явного закрытия панели
  const handleCloseButtonsPanel = () => {
    // Закрываем панель только если нет открытого модального окна
    if (!document.body.classList.contains("modal-open")) {
      setShowButtons(false);
    }
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
              position={{ x: selectionPosition.x, y: selectionPosition.y }}
              onExplain={handleExplain}
              onTranslate={handleTranslate}
              onClose={handleCloseButtonsPanel}
              onRequestApiKey={handleRequestApiKey}
            />
          )}

          {resources && (
            <FloatButton
              onClick={handleOpenChat}
              icon={resources.chatIconUrl || resources.iconUrl}
            />
          )}

          {showChat && (
            <ChatWindow
              title="Чат"
              messages={messages}
              onSendMessage={handleSendMessage}
              onClose={handleCloseChat}
              isLoading={isProcessing}
              error={error}
              onShowHistory={() => console.log("Показать историю")}
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
