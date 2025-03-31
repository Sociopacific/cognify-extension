/**
 * Content script для расширения Cognify
 * Отвечает за инъекцию React-приложения в страницу и коммуникацию с background.js
 */

console.log("[Cognify] Content script загружен");

// Передаем пути к ресурсам через data-атрибуты DOM
const prepareResourceUrls = () => {
  const resourceUrls = {
    iconUrl: chrome.runtime.getURL("assets/icon.png"),
    explainIconUrl: chrome.runtime.getURL("assets/explane.svg"),
    translateIconUrl: chrome.runtime.getURL("assets/translate.svg"),
    sendIconUrl: chrome.runtime.getURL("assets/send.svg"),
    chatIconUrl: chrome.runtime.getURL("assets/chat-icon.svg"),
  };

  // Создаем глобальную переменную для React-приложения (но это не сработает для инжектированного скрипта)
  window.cognifyResources = resourceUrls;

  console.log("[Cognify] Ресурсы расширения получены:", resourceUrls);
  return resourceUrls;
};

// Создаем визуальный индикатор для отладки
const createDebugIndicator = () => {
  const indicator = document.createElement("div");
  indicator.innerText = "Cognify Content Script работает";
  indicator.style.cssText = `
    position: fixed;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 100000;
  `;
  document.body.appendChild(indicator);

  // Удаляем индикатор через 5 секунд
  setTimeout(() => {
    indicator.remove();
  }, 5000);
};

// Показываем индикатор сразу, если body существует
if (document.body) {
  createDebugIndicator();
} else {
  // Иначе ждем загрузки DOM
  document.addEventListener("DOMContentLoaded", createDebugIndicator);
}

// Создаем контейнер для React-приложения
const createReactAppContainer = (resourceUrls) => {
  console.log("[Cognify] Создание контейнера для React-приложения");
  const container = document.createElement("div");
  container.id = "cognify-extension-root";

  // Устанавливаем правильное позиционирование контейнера
  // Важно: его позиция должна быть fixed, размер на весь экран, и z-index высокий
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2147483647;
    pointer-events: none !important;
    overflow: visible;
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  `;

  // Добавляем пути к ресурсам через data-атрибуты
  container.dataset.resourcesIcon = resourceUrls.iconUrl;
  container.dataset.resourcesExplainIcon = resourceUrls.explainIconUrl;
  container.dataset.resourcesTranslateIcon = resourceUrls.translateIconUrl;
  container.dataset.resourcesSendIcon = resourceUrls.sendIconUrl;
  container.dataset.resourcesChatIcon = resourceUrls.chatIconUrl;

  // Проверка установки data-атрибутов
  console.log("[Cognify] Проверка data-атрибутов контейнера:", {
    "data-resources-icon": container.dataset.resourcesIcon,
    "data-resources-explain-icon": container.dataset.resourcesExplainIcon,
    "data-resources-translate-icon": container.dataset.resourcesTranslateIcon,
    "data-resources-send-icon": container.dataset.resourcesSendIcon,
    "data-resources-chat-icon": container.dataset.resourcesChatIcon,
  });

  // Добавляем контейнер в DOM
  document.body.appendChild(container);
  console.log(
    "[Cognify] Контейнер создан и добавлен в DOM с data-атрибутами:",
    container.dataset
  );
  return container;
};

// Инъекция React-приложения
const injectReactApp = async () => {
  console.log("[Cognify] Начало инъекции React-приложения");

  // Проверяем, что контейнер еще не существует
  if (document.getElementById("cognify-extension-root")) {
    console.log("[Cognify] Контейнер уже существует, пропускаем инъекцию");
    return;
  }

  // Получаем пути к ресурсам
  const resourceUrls = prepareResourceUrls();

  // Создаем контейнер с data-атрибутами для ресурсов
  const container = createReactAppContainer(resourceUrls);

  try {
    // Загружаем скрипт с React-приложением
    console.log("[Cognify] Загрузка bundle.js");
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("bundle.js");

    // Добавляем обработчики событий
    script.onload = () => {
      console.log("[Cognify] Bundle.js успешно загружен");
      // Триггерим кастомное событие, чтобы React узнал, что контейнер с ресурсами готов
      const event = new CustomEvent("cognify-resources-ready", {
        detail: resourceUrls,
      });
      document.dispatchEvent(event);
      console.log(
        "[Cognify] Отправлено событие cognify-resources-ready с данными:",
        resourceUrls
      );
    };
    script.onerror = (error) =>
      console.error("[Cognify] Ошибка при загрузке bundle.js:", error);

    // Добавляем скрипт в DOM
    document.head.appendChild(script);
    console.log("[Cognify] Скрипт добавлен в DOM");
  } catch (error) {
    console.error(
      "[Cognify] Критическая ошибка при инъекции React-приложения:",
      error
    );
  }
};

// Попытка загрузить приложение немедленно
console.log("[Cognify] Запуск начальной загрузки");
if (document.readyState === "loading") {
  console.log(
    "[Cognify] Страница загружается, ожидаем событие DOMContentLoaded"
  );
  document.addEventListener("DOMContentLoaded", injectReactApp);
} else {
  console.log("[Cognify] Страница уже загружена, инъецируем приложение сразу");
  injectReactApp();
}

// Слушаем сообщения от background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("[Cognify] Получено сообщение от background.js:", request);

  if (request.action === "openEmptyChat") {
    console.log("[Cognify] Генерация события openEmptyChat");
    // Перенаправляем сообщение в React-приложение через событие
    const event = new CustomEvent("cognify-open-empty-chat");
    document.dispatchEvent(event);
    console.log("[Cognify] Событие сгенерировано");
  }

  // Обязательно возвращаем true, если sendResponse будет вызван асинхронно
  return true;
});
