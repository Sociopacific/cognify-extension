import { useState, useEffect } from "react";
import { Message } from "../components/Chat/ChatMessage";

// Проверяем доступность Chrome API
const isChromeAPIAvailable =
  typeof chrome !== "undefined" &&
  chrome.storage !== undefined &&
  chrome.storage.local !== undefined;

// Локальное хранилище для использования, если chrome.storage недоступен
const localStorageCache: Record<string, any> = {};

// Функция для сохранения данных в доступное хранилище
async function saveToStorage(key: string, value: any): Promise<void> {
  console.log(`[Cognify] Saving ${key} to storage`);

  if (isChromeAPIAvailable) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, () => {
        resolve();
      });
    });
  } else {
    console.warn("[Cognify] chrome.storage not available, using local storage");
    localStorageCache[key] = value;
    try {
      // Пытаемся использовать localStorage как запасной вариант
      localStorage.setItem(`cognify_${key}`, JSON.stringify(value));
    } catch (e) {
      console.error("[Cognify] Error using localStorage:", e);
    }
    return Promise.resolve();
  }
}

// Функция для получения данных из доступного хранилища
async function getFromStorage(key: string): Promise<any> {
  console.log(`[Cognify] Reading ${key} from storage`);

  if (isChromeAPIAvailable) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key]);
      });
    });
  } else {
    console.warn("[Cognify] chrome.storage not available, using local storage");
    if (key in localStorageCache) {
      return Promise.resolve(localStorageCache[key]);
    }

    // Пытаемся использовать localStorage как запасной вариант
    try {
      const item = localStorage.getItem(`cognify_${key}`);
      if (item) {
        const parsed = JSON.parse(item);
        localStorageCache[key] = parsed;
        return Promise.resolve(parsed);
      }
    } catch (e) {
      console.error("[Cognify] Error using localStorage:", e);
    }

    return Promise.resolve(undefined);
  }
}

interface ChatHistoryItem {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}

interface UseChatHistoryResult {
  currentChat: {
    id: string | null;
    messages: Message[];
  };
  chatsList: ChatHistoryItem[];
  saveChat: (messages: Message[]) => void;
  loadChat: (id: string) => void;
  deleteChat: (id: string) => void;
  createNewChat: () => void;
}

export const useChatHistory = (): UseChatHistoryResult => {
  const [currentChat, setCurrentChat] = useState<{
    id: string | null;
    messages: Message[];
  }>({
    id: null,
    messages: [],
  });
  const [chatsList, setChatsList] = useState<ChatHistoryItem[]>([]);

  // Загружаем список чатов при монтировании
  useEffect(() => {
    const loadChats = async () => {
      try {
        const chats = await getFromStorage("chats");
        if (chats) {
          console.log("[Cognify] Loaded chats from storage:", chats);
          setChatsList(JSON.parse(chats));
        } else {
          console.log("[Cognify] No chats found in storage");
        }
      } catch (error) {
        console.error("[Cognify] Error loading chats:", error);
      }
    };

    loadChats();
  }, []);

  // Создание нового чата
  const createNewChat = () => {
    setCurrentChat({ id: null, messages: [] });
  };

  // Сохранение текущего чата
  const saveChat = async (messages: Message[]) => {
    if (messages.length === 0) return;

    try {
      const timestamp = Date.now();
      const firstUserMessage =
        messages.find((m) => m.role === "user")?.content || "";
      const title =
        firstUserMessage.slice(0, 30) +
        (firstUserMessage.length > 30 ? "..." : "");

      let updatedChats: ChatHistoryItem[] = [...chatsList];

      if (currentChat.id) {
        // Обновляем существующий чат
        updatedChats = updatedChats.map((chat) =>
          chat.id === currentChat.id
            ? { ...chat, messages, updatedAt: timestamp, title }
            : chat
        );
      } else {
        // Создаем новый чат
        const newChat: ChatHistoryItem = {
          id: `chat_${timestamp}`,
          title,
          messages,
          createdAt: timestamp,
          updatedAt: timestamp,
        };

        updatedChats = [newChat, ...updatedChats];
        setCurrentChat({ id: newChat.id, messages });
      }

      // Сортируем по дате обновления (сначала новые)
      updatedChats.sort((a, b) => b.updatedAt - a.updatedAt);

      // Сохраняем в хранилище
      console.log("[Cognify] Saving chats to storage:", JSON.stringify(updatedChats));
      await saveToStorage("chats", JSON.stringify(updatedChats));
      setChatsList(updatedChats);
    } catch (error) {
      console.error("[Cognify] Error saving chat:", error);
    }
  };

  // Загрузка чата по ID
  const loadChat = (id: string) => {
    try {
      console.log("[Cognify] Loading chat:", id);
      const chat = chatsList.find((c) => c.id === id);
      if (chat) {
        console.log("[Cognify] Chat found:", chat);
        setCurrentChat({ id, messages: chat.messages });
      } else {
        console.error("[Cognify] Chat not found:", id);
      }
    } catch (error) {
      console.error("[Cognify] Error loading chat:", error);
    }
  };

  // Удаление чата
  const deleteChat = async (id: string) => {
    try {
      console.log("[Cognify] Deleting chat:", id);
      const updatedChats = chatsList.filter((chat) => chat.id !== id);
      await saveToStorage("chats", JSON.stringify(updatedChats));
      setChatsList(updatedChats);

      // Если удаляем текущий чат, создаем новый
      if (currentChat.id === id) {
        createNewChat();
      }
    } catch (error) {
      console.error("[Cognify] Error deleting chat:", error);
    }
  };

  return {
    currentChat,
    chatsList,
    saveChat,
    loadChat,
    deleteChat,
    createNewChat,
  };
};

export default useChatHistory;
