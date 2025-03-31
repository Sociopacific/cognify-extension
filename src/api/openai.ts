import { getFromStorage, saveToStorage, removeFromStorage } from "./storage";
import { Message } from "../components/Chat/ChatMessage";

const API_KEY_STORAGE_KEY = "openai_api_key";

// Получение API ключа из хранилища
export async function getApiKey(): Promise<string | null> {
  return getFromStorage(API_KEY_STORAGE_KEY);
}

// Сохранение API ключа в хранилище
export async function saveApiKey(apiKey: string): Promise<void> {
  return saveToStorage(API_KEY_STORAGE_KEY, apiKey);
}

// Удаление API ключа из хранилища
export async function removeApiKey(): Promise<void> {
  return removeFromStorage(API_KEY_STORAGE_KEY);
}

// Проверка наличия API ключа
export async function hasApiKey(): Promise<boolean> {
  const apiKey = await getApiKey();
  return !!apiKey;
}

// Отправка запроса к API OpenAI
export async function sendChatRequest(messages: Message[]): Promise<string> {
  const apiKey = await getApiKey();

  if (!apiKey) {
    throw new Error("API key not found");
  }

  try {
    // Преобразуем сообщения для API, обрабатывая поле context
    const apiMessages = messages.map((msg) => {
      if (msg.context) {
        // Если есть контекст, включаем его в содержимое сообщения
        return {
          role: msg.role,
          content: `${msg.content}\n\nContext:\n${msg.context}`,
        };
      } else {
        // Если контекста нет, передаем только содержимое
        return {
          role: msg.role,
          content: msg.content,
        };
      }
    });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      // Если получаем 401, значит API ключ недействителен
      if (response.status === 401) {
        await removeApiKey();
        throw new Error("API key is invalid");
      }
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error sending chat request:", error);
    throw error;
  }
}
