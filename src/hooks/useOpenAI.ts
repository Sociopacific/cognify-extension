import { useState } from "react";
import { Message } from "../components/Chat/ChatMessage";

interface UseOpenAIResult {
  loading: boolean;
  error: string | null;
  sendMessage: (messages: Message[]) => Promise<string>;
}

export const useOpenAI = (): UseOpenAIResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (messages: Message[]): Promise<string> => {
    setLoading(true);
    setError(null);

    try {
      // Получаем API ключ из хранилища
      const { apiKey } = await chrome.storage.sync.get(["apiKey"]);

      if (!apiKey) {
        throw new Error(
          "API ключ не найден. Пожалуйста, добавьте его в настройках расширения."
        );
      }

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            temperature: 0.7,
            max_tokens: 2000,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Ошибка API");
      }

      const data = await response.json();
      const result = data.choices[0]?.message?.content || "";

      setLoading(false);
      return result;
    } catch (err) {
      setLoading(false);
      const errorMessage =
        err instanceof Error ? err.message : "Неизвестная ошибка";
      setError(errorMessage);
      throw err;
    }
  };

  return { loading, error, sendMessage };
};

export default useOpenAI;
