import { CONTEXT_CONFIG } from "./config";

/**
 * Function to get text with context around selected word
 */
export function getContextFromSelection(selection: Selection): string | null {
  try {
    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    // Get the selected word and its range
    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) {
      return null;
    }

    // Get context from the nearest parent element
    let node = range.commonAncestorContainer;
    let context = node.textContent?.trim() || "";

    // If the selected word is the entire context, then try to
    // find a wider context in a higher parent element
    if (context === selectedText && node.parentElement) {
      node = node.parentElement;
      context = node.textContent?.trim() || "";
    }

    return context;
  } catch (error) {
    console.error("Error getting context:", error);
    return null;
  }
}

/**
 * Функция для получения ограниченного контекста вокруг выделенного текста
 * @param selection - объект Selection
 * @param wordsBefore - количество слов до выделения
 * @param wordsAfter - количество слов после выделения
 * @returns строка с контекстом или null в случае ошибки
 */
export function getLimitedContextFromSelection(
  selection: Selection,
  wordsBefore: number = CONTEXT_CONFIG.WORDS_BEFORE,
  wordsAfter: number = CONTEXT_CONFIG.WORDS_AFTER
): string | null {
  try {
    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    // Получаем выделенный текст и его диапазон
    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) {
      return null;
    }

    // Получаем элемент, содержащий выделение
    let node = range.commonAncestorContainer;

    // Если узел - текстовый узел, берем его родителя
    if (node.nodeType === Node.TEXT_NODE && node.parentElement) {
      node = node.parentElement;
    }

    // Получаем весь текст из текущего элемента
    const fullText = node.textContent || "";

    // Находим позицию выделенного текста
    const selectedIndex = fullText.indexOf(selectedText);

    if (selectedIndex === -1) {
      return selectedText; // Если не можем найти точное совпадение, возвращаем только выделенный текст
    }

    // Получаем текст до выделения
    const textBefore = fullText.substring(0, selectedIndex);
    // Получаем текст после выделения
    const textAfter = fullText.substring(selectedIndex + selectedText.length);

    // Разбиваем текст до выделения на слова и берем последние wordsBefore слов
    const beforeWords = textBefore.split(/\s+/).filter(Boolean);
    const limitedBefore =
      beforeWords.length > wordsBefore
        ? beforeWords.slice(-wordsBefore).join(" ")
        : textBefore;

    // Разбиваем текст после выделения на слова и берем первые wordsAfter слов
    const afterWords = textAfter.split(/\s+/).filter(Boolean);
    const limitedAfter =
      afterWords.length > wordsAfter
        ? afterWords.slice(0, wordsAfter).join(" ")
        : textAfter;

    // Формируем ограниченный контекст
    return `${limitedBefore} ${selectedText} ${limitedAfter}`.trim();
  } catch (error) {
    console.error("Ошибка при получении ограниченного контекста:", error);
    return null; // В случае ошибки возвращаем null
  }
}

/**
 * Функция для получения всего контекста из выделения
 */
export function getFullContextFromSelection(
  selection: Selection
): string | null {
  try {
    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    // Получаем выделенный текст и его диапазон
    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    if (!selectedText) {
      return null;
    }

    // Получаем контекст из ближайшего родительского элемента
    let node = range.commonAncestorContainer;
    let context = node.textContent?.trim() || "";

    // Если выделенный текст совпадает с контекстом, пробуем получить
    // более широкий контекст из родительского элемента
    if (context === selectedText && node.parentElement) {
      node = node.parentElement;
      context = node.textContent?.trim() || "";
    }

    return context;
  } catch (error) {
    console.error("Ошибка при получении полного контекста:", error);
    return null;
  }
}

/**
 * Function to get text of the entire page (with length restriction)
 */
export const getPageText = (
  maxLength: number = CONTEXT_CONFIG.MAX_PAGE_TEXT_LENGTH
): string => {
  try {
    // Получаем текст из body
    const bodyText = document.body.innerText || "";

    // Если длина текста меньше максимального значения, возвращаем весь текст
    if (bodyText.length <= maxLength) {
      return bodyText;
    }

    // Иначе возвращаем обрезанный текст
    return bodyText.substring(0, maxLength) + "... (текст страницы обрезан)";
  } catch (error) {
    console.error("Ошибка при получении текста страницы:", error);
    return "Не удалось получить текст страницы.";
  }
};
