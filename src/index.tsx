import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles.css";

// Функция для поиска и монтирования React-приложения в контейнер
const mountApp = () => {
  const container = document.getElementById("cognify-extension-root");

  if (container) {
    const root = ReactDOM.createRoot(container);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    // Если контейнер не найден, пробуем еще раз через 100 мс
    setTimeout(mountApp, 100);
  }
};

// Запускаем монтирование
mountApp();
