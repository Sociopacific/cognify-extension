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
 * Function to get text of the entire page (with length restriction)
 */
export const getPageText = (maxLength: number = 5000): string => {
  try {
    // Get text from body
    const bodyText = document.body.innerText || "";

    // If the text length is less than the maximum value, return the entire text
    if (bodyText.length <= maxLength) {
      return bodyText;
    }

    // Otherwise, return the truncated text
    return bodyText.substring(0, maxLength) + "... (текст страницы обрезан)";
  } catch (error) {
    console.error("Error getting text of the page:", error);
    return "Не удалось получить текст страницы.";
  }
};
