import React, { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import Switch from "../Switch/Switch";
import Checkbox from "../Checkbox/Checkbox";
import { CognifyResources, getResourcesFromContainer } from "../../types";
import { hasApiKey } from "../../api/openai";

// Компоненты для иконок с динамическими путями
const ExplainIcon = ({ iconPath }: { iconPath: string }) => (
  <img
    src={iconPath}
    alt="Explain"
    className="w-[18px] h-[18px] filter brightness-0 invert"
  />
);

const TranslateIcon = ({ iconPath }: { iconPath: string }) => (
  <img
    src={iconPath}
    alt="Translate"
    className="w-[18px] h-[18px] filter brightness-0 invert"
  />
);

interface ButtonsPanelProps {
  selectedText: string;
  position: { x: number; y: number };
  onExplain: (
    selectedText: string,
    useApi: boolean,
    useWideContext: boolean
  ) => void;
  onTranslate: (
    selectedText: string,
    useApi: boolean,
    useWideContext: boolean
  ) => void;
  onClose: () => void;
  onRequestApiKey?: () => void;
}

const ButtonsPanel: React.FC<ButtonsPanelProps> = ({
  selectedText,
  position,
  onExplain,
  onTranslate,
  onClose,
  onRequestApiKey,
}) => {
  const [useApi, setUseApi] = useState(false);
  const [useWideContext, setUseWideContext] = useState(false);
  const [resources, setResources] = useState<CognifyResources | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelPosition, setPanelPosition] = useState({ top: 0, left: 0 });

  // Получаем пути к иконкам при монтировании компонента
  useEffect(() => {
    const containerResources = getResourcesFromContainer();
    if (containerResources) {
      setResources(containerResources);
      console.log(
        "[Cognify React] ButtonsPanel: ресурсы получены",
        containerResources
      );
    } else {
      console.error(
        "[Cognify React] ButtonsPanel: не удалось получить ресурсы"
      );
    }

    // Проверяем наличие API ключа при инициализации компонента
    const checkApiKey = async () => {
      const hasKey = await hasApiKey();
      setUseApi(hasKey); // Включаем API Mode только если есть ключ
    };

    checkApiKey();

    // Обработчик для закрытия панели только при явном клике вне ее границ
    const handleDocumentMouseDown = (e: MouseEvent) => {
      const clickOnExtensionApp = (e.target as HTMLElement).classList.contains(
        "cognify-extension-app"
      );

      if (clickOnExtensionApp) {
        return;
      }

      onClose();
    };

    // Обработчик для документа, чтобы закрывать панель
    document.addEventListener("mousedown", handleDocumentMouseDown);

    // Очищаем обработчики при размонтировании
    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
    };
  }, [onClose]);

  // Обновляем позицию панели при изменении props.position
  useEffect(() => {
    console.log("[Cognify React] ButtonsPanel: отрисовка с позицией", position);

    // Используем позицию напрямую, без ограничений по границам экрана
    setPanelPosition({
      top: position.y,
      left: position.x,
    });

    // Проверяем видимость панели после отрисовки
    setTimeout(() => {
      if (panelRef.current) {
        const rect = panelRef.current.getBoundingClientRect();
        console.log("[Cognify React] ButtonsPanel: реальная позиция", rect);

        // Проверяем стили
        const computedStyle = window.getComputedStyle(panelRef.current);
        console.log("[Cognify React] ButtonsPanel: вычисленные стили", {
          display: computedStyle.display,
          position: computedStyle.position,
          visibility: computedStyle.visibility,
          zIndex: computedStyle.zIndex,
          opacity: computedStyle.opacity,
        });
      }
    }, 100);
  }, [position]);

  const handleExplain = () => {
    console.log("[Cognify React] ButtonsPanel: нажата кнопка Explain");
    onExplain(selectedText, useApi, useWideContext);
  };

  const handleTranslate = () => {
    console.log("[Cognify React] ButtonsPanel: нажата кнопка Translate");
    onTranslate(selectedText, useApi, useWideContext);
  };

  const handleApiModeChange = async (checked: boolean) => {
    // Предотвращаем потерю фокуса при клике на переключатель
    const activeElement = document.activeElement;

    // Если включаем API режим
    if (checked) {
      // Проверяем наличие API ключа
      const hasKey = await hasApiKey();
      if (!hasKey && onRequestApiKey) {
        // Если ключа нет, открываем модальное окно и не меняем состояние
        onRequestApiKey();
        return; // Не меняем состояние, пока ключ не будет введен
      }
    }

    // Если отключаем API режим, то выключаем и Full Page Context
    if (!checked) {
      setUseWideContext(false);
    }

    setUseApi(checked);

    // Восстанавливаем фокус, чтобы сохранить выделение текста
    if (activeElement && activeElement instanceof HTMLElement) {
      activeElement.focus();
    }
  };

  // Обработчик для Full Page Context, активен только если API Mode включен
  const handleContextChange = (checked: boolean) => {
    if (useApi) {
      setUseWideContext(checked);
    }
  };

  // Если ресурсы не загружены, не отображаем панель
  if (!resources) {
    console.log(
      "[Cognify React] ButtonsPanel: ресурсы не загружены, не отображаем панель"
    );
    return null;
  }

  console.log(
    "[Cognify React] ButtonsPanel: финальная отрисовка с позицией",
    panelPosition
  );

  return (
    <div
      ref={panelRef}
      className="fixed bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] p-5 z-[10001] w-auto flex flex-col gap-2"
      style={{
        position: "fixed",
        transform: `translate(${panelPosition.left}px, ${panelPosition.top}px)`,
        transformOrigin: "top left",
        pointerEvents: "auto" as React.CSSProperties["pointerEvents"],
        willChange: "transform",
      }}
    >
      <Button
        text="Explain"
        icon={<ExplainIcon iconPath={resources.explainIconUrl} />}
        bgColor="linear-gradient(135deg, #10a37f 0%, #0A8A6B 100%)"
        onClick={handleExplain}
      />
      <Button
        text="Translate"
        icon={<TranslateIcon iconPath={resources.translateIconUrl} />}
        bgColor="linear-gradient(135deg, #444BEA 0%, #3339cc 100%)"
        onClick={handleTranslate}
      />
      <div className="mt-1.5 pt-1">
        <Switch
          label="Full Page Context"
          isChecked={useWideContext}
          onChange={handleContextChange}
          disabled={!useApi}
        />
        <Switch
          label="API Mode"
          isChecked={useApi}
          onChange={handleApiModeChange}
        />
      </div>
    </div>
  );
};

export default ButtonsPanel;
