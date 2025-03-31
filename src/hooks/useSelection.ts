import { useState, useEffect } from "react";

interface UseSelectionResult {
  selectedText: string;
  hasSelection: boolean;
  selectionPosition: { x: number; y: number } | null;
}

export const useSelection = (): UseSelectionResult => {
  const [selectedText, setSelectedText] = useState("");
  const [hasSelection, setHasSelection] = useState(false);
  const [selectionPosition, setSelectionPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleSelection = () => {
    const selection = window.getSelection();
    if (!selection) return;

    const text = selection.toString().trim();
    console.log(
      "[Cognify] Выделение текста:",
      text
        ? `'${text.substring(0, 50)}${text.length > 50 ? "..." : ""}'`
        : "нет"
    );

    // Проверяем, находится ли выделение внутри чата
    let isInsideChat = false;

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const node = range.startContainer;

      // Проверяем, находится ли узел внутри элемента с классом "chat-window"
      let currentNode: Node | null | ParentNode = node;
      while (currentNode && currentNode !== document.body) {
        if (currentNode instanceof Element) {
          if (
            currentNode.classList.contains("chat-window") ||
            currentNode.closest(".chat-window") ||
            currentNode.closest("#cognify-extension-root .chat-window")
          ) {
            isInsideChat = true;
            console.log("[Cognify] Выделение внутри чата - игнорируем");
            break;
          }
        }
        currentNode = currentNode.parentNode;
      }
    }

    if (text && !isInsideChat) {
      setSelectedText(text);
      setHasSelection(true);

      // Получаем позицию выделения
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Используем viewport-координаты для позиционирования
        // фиксированного элемента в fixed-контейнере
        const x = rect.left + rect.width / 2;
        const y = rect.bottom + 10;

        console.log("[Cognify] Позиция выделения в viewport:", { rect, x, y });

        setSelectionPosition({ x, y });
      } else {
        console.log("[Cognify] Не удалось получить диапазон выделения");
      }
    } else {
      setHasSelection(false);
      setSelectionPosition(null);
      console.log("[Cognify] Выделение сброшено или внутри чата");
    }
  };

  useEffect(() => {
    console.log("[Cognify] Инициализация обработчика выделения текста");

    // Используем mouseup для обработки выделения мышью
    document.addEventListener("mouseup", handleSelection);

    // Добавляем обработчик для выделения с клавиатуры
    document.addEventListener("selectionchange", () => {
      setTimeout(handleSelection, 0);
    });

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("selectionchange", handleSelection);
    };
  }, []);

  return { selectedText, hasSelection, selectionPosition };
};

export default useSelection;
