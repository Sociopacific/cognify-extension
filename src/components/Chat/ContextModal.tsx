import React from "react";

interface ContextModalProps {
  context: string | null;
  onClose: () => void;
}

const ContextModal: React.FC<ContextModalProps> = ({ context, onClose }) => {
  if (!context) return null;

  return (
    <div className="px-4 mt-0 overflow-y-auto flex-grow border-none scrollbar-hide">
      <pre className="whitespace-pre-wrap font-mono text-sm m-0 leading-6 text-left text-gray-600 py-2.5 px-0 rounded-none overflow-y-auto overflow-x-hidden break-words max-w-full scrollbar-hide">
        {context}
      </pre>
    </div>
  );
};

export default ContextModal;
