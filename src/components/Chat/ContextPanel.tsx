import React from "react";
import PanelWrapper from "./PanelWrapper";

interface ContextPanelProps {
  context: string | null;
  onClose: () => void;
  onCloseWindow?: () => void;
}

const ContextPanel: React.FC<ContextPanelProps> = ({
  context,
  onClose,
  onCloseWindow,
}) => {
  if (!context) return null;

  return (
    <PanelWrapper
      title="Контекст сообщения"
      onClose={onClose}
      onCloseWindow={onCloseWindow}
    >
      <div className="px-4 mt-0 overflow-y-auto flex-grow border-none scrollbar-hide">
        <pre className="whitespace-pre-wrap font-mono text-sm m-0 leading-6 text-left text-gray-600 py-2.5 px-0 rounded-none overflow-y-auto overflow-x-hidden break-words max-w-full scrollbar-hide">
          {context}
        </pre>
      </div>
    </PanelWrapper>
  );
};

export default ContextPanel;
