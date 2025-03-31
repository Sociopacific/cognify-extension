/**
 * Типы для расширения Cognify
 */

export interface CognifyResources {
  iconUrl: string;
  explainIconUrl: string;
  translateIconUrl: string;
  sendIconUrl: string;
  chatIconUrl: string;
}

// Экспортируем утилиту для получения ресурсов
export function getResourcesFromContainer(): CognifyResources | null {
  console.log("[Cognify] Попытка получить ресурсы из контейнера");

  const container = document.getElementById("cognify-extension-root");

  if (!container) {
    console.error("[Cognify] Контейнер с id cognify-extension-root не найден");
    return null;
  }

  console.log("[Cognify] Контейнер найден, извлечение data-атрибутов");

  // Логируем все data-атрибуты для отладки
  console.log("[Cognify] Все data-атрибуты контейнера:", container.dataset);

  // Получаем ресурсы из data-атрибутов
  const resources: CognifyResources = {
    iconUrl: container.dataset.resourcesIcon || "",
    explainIconUrl: container.dataset.resourcesExplainIcon || "",
    translateIconUrl: container.dataset.resourcesTranslateIcon || "",
    sendIconUrl: container.dataset.resourcesSendIcon || "",
    chatIconUrl: container.dataset.resourcesChatIcon || "",
  };

  // Проверяем, что все ресурсы определены
  const hasAllResources = Object.values(resources).every(
    (url) => url.length > 0
  );

  if (!hasAllResources) {
    console.error(
      "[Cognify] Не все ресурсы найдены в data-атрибутах:",
      resources
    );

    // Проверка каждого атрибута отдельно для выявления проблемы
    console.error("[Cognify] Проверка отдельных атрибутов:");
    console.error("- iconUrl:", container.dataset.resourcesIcon);
    console.error("- explainIconUrl:", container.dataset.resourcesExplainIcon);
    console.error(
      "- translateIconUrl:",
      container.dataset.resourcesTranslateIcon
    );
    console.error("- sendIconUrl:", container.dataset.resourcesSendIcon);
    console.error("- chatIconUrl:", container.dataset.resourcesChatIcon);

    // В отладочных целях можем всё равно вернуть ресурсы, даже если некоторые отсутствуют
    console.log(
      "[Cognify] Возвращаем ресурсы с пустыми значениями для отладки"
    );
    return resources;
  }

  console.log("[Cognify] Все ресурсы успешно получены:", resources);
  return resources;
}
