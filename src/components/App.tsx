import React, { useEffect } from "react";
import ExtensionApp from "./ExtensionApp";

const App: React.FC = () => {
  // Добавляем логи при монтировании компонента
  useEffect(() => {
    console.log("[Cognify App] App компонент смонтирован");
    // Добавляем глобальный объект для отладки
    (window as any).cognifyDebug = {
      appLoaded: true,
      timestamp: new Date().toISOString(),
    };
  }, []);

  // Проверяем, открыто ли расширение в отдельной странице или встроено в веб-страницу
  const isStandalone = window.location.href.includes("chrome-extension://");
  console.log("[Cognify App] isStandalone:", isStandalone);

  return (
    <div className="flex flex-col items-center justify-start h-screen p-10 text-center bg-transparent">
      {isStandalone ? (
        // Отображение для страницы настроек расширения
        <>
          <h1 className="text-2xl mb-4 text-gray-900">Cognify Extension</h1>
          <p className="text-base mb-8 text-gray-600">
            Расширение для объяснения и перевода текста
          </p>

          <div className="w-full max-w-lg bg-white rounded-xl p-5 text-left shadow-md">
            <h2 className="mt-0 mb-5 text-xl text-gray-900">Настройки</h2>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="api-key" className="text-gray-800 font-medium">
                API ключ OpenAI:
              </label>
              <input
                type="password"
                id="api-key"
                placeholder="Введите ваш API ключ"
                className="p-2.5 border border-gray-300 rounded-md text-sm"
              />
              <button className="mt-2.5 p-2.5 bg-gray-900 text-white border-none rounded-md font-medium cursor-pointer transition-colors duration-200 hover:bg-gray-700">
                Сохранить
              </button>
            </div>
          </div>
        </>
      ) : (
        // Основной функционал расширения для внедрения в веб-страницы
        <ExtensionApp />
      )}
    </div>
  );
};

export default App;
