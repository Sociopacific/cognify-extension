import React, { useState } from "react";
import Button from "./Button/Button";

interface ApiKeyModalProps {
  onSubmit: (apiKey: string) => void;
  onCancel: () => void;
  isVisible: boolean;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  onSubmit,
  onCancel,
  isVisible,
}) => {
  const [apiKey, setApiKey] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim() || !apiKey.startsWith("sk-")) {
      setIsInvalid(true);
      return;
    }
    onSubmit(apiKey.trim());
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[2147483647]"
      style={{ pointerEvents: "auto" as React.CSSProperties["pointerEvents"] }}
    >
      <div className="bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Введите API ключ OpenAI</h2>
        <p className="mb-4 text-gray-600 text-sm">
          Для работы с API OpenAI необходим API ключ. Вы можете получить его на
          сайте{" "}
          <a
            href="https://platform.openai.com/api-keys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            platform.openai.com
          </a>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setIsInvalid(false);
              }}
              placeholder="sk-..."
              className={`w-full p-2.5 border rounded-xl ${
                isInvalid ? "border-red-500" : "border-gray-300"
              } text-sm outline-none font-sans transition-all duration-200`}
            />
            {isInvalid && (
              <p className="text-red-500 text-xs mt-1">
                Введите корректный API ключ, начинающийся с "sk-"
              </p>
            )}
          </div>

          <div className="flex justify-center space-x-2">
            <Button
              text="Сохранить"
              onClick={(e) => handleSubmit(e as React.FormEvent)}
              variant="primary"
            />
            <Button text="Отмена" onClick={onCancel} variant="secondary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApiKeyModal;
