// Проверяем доступность Chrome API
const isChromeAPIAvailable =
  typeof chrome !== "undefined" &&
  chrome.storage !== undefined &&
  chrome.storage.local !== undefined;

// Локальное хранилище для использования, если chrome.storage недоступен
const localStorageCache: Record<string, any> = {};

const CHAT_HISTORY_KEY = "chat_history";
const SETTINGS_KEY = "settings";

export interface ChatHistoryItem {
  id: string;
  title: string;
  createdAt: number;
  messages: any[];
}

export interface Settings {
  useApi: boolean;
  useWideContext: boolean;
}

// Функция для сохранения данных в доступное хранилище
export async function saveToStorage(key: string, value: any): Promise<void> {
  console.log(`[Storage] Saving ${key} to storage`);

  if (isChromeAPIAvailable) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, () => {
        resolve();
      });
    });
  } else {
    console.warn("[Storage] chrome.storage not available, using local storage");
    localStorageCache[key] = value;
    try {
      // Пытаемся использовать localStorage как запасной вариант
      localStorage.setItem(`cognify_${key}`, JSON.stringify(value));
    } catch (e) {
      console.error("[Storage] Error using localStorage:", e);
    }
    return Promise.resolve();
  }
}

// Функция для получения данных из доступного хранилища
export async function getFromStorage(key: string): Promise<any> {
  console.log(`[Storage] Reading ${key} from storage`);

  if (isChromeAPIAvailable) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key]);
      });
    });
  } else {
    console.warn("[Storage] chrome.storage not available, using local storage");
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
      console.error("[Storage] Error using localStorage:", e);
    }

    return Promise.resolve(undefined);
  }
}

// Функция для удаления данных из доступного хранилища
export async function removeFromStorage(key: string): Promise<void> {
  console.log(`[Storage] Removing ${key} from storage`);

  if (isChromeAPIAvailable) {
    return new Promise((resolve) => {
      chrome.storage.local.remove(key, () => {
        resolve();
      });
    });
  } else {
    console.warn("[Storage] chrome.storage not available, using local storage");
    delete localStorageCache[key];

    // Пытаемся использовать localStorage как запасной вариант
    try {
      localStorage.removeItem(`cognify_${key}`);
    } catch (e) {
      console.error("[Storage] Error using localStorage:", e);
    }

    return Promise.resolve();
  }
}

export async function getChatHistory(): Promise<ChatHistoryItem[]> {
  const history = await getFromStorage(CHAT_HISTORY_KEY);
  return history || [];
}

export async function saveChatHistory(
  history: ChatHistoryItem[]
): Promise<void> {
  await saveToStorage(CHAT_HISTORY_KEY, history);
}

export async function deleteChat(id: string): Promise<void> {
  const history = await getChatHistory();
  const updatedHistory = history.filter((chat) => chat.id !== id);
  await saveChatHistory(updatedHistory);
}

export async function getSettings(): Promise<Settings> {
  const settings = await getFromStorage(SETTINGS_KEY);
  return settings || { useApi: false, useWideContext: false };
}

export async function saveSettings(settings: Settings): Promise<void> {
  await saveToStorage(SETTINGS_KEY, settings);
}
