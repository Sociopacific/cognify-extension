import React, { ReactNode } from "react";

interface PanelWrapperProps {
  title: string;
  onClose: () => void;
  onCloseWindow?: () => void;
  children: ReactNode;
}

const PanelWrapper: React.FC<PanelWrapperProps> = ({
  title,
  onClose,
  onCloseWindow,
  children,
}) => {
  return (
    <div className="absolute inset-0 bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] z-[10002] overflow-hidden flex flex-col animate-fadeIn">
      <div className="flex justify-between items-center p-5 px-6 border-b border-[rgba(0,0,0,0.1)] h-[60px] box-border">
        <div className="flex items-center gap-2.5">
          <h3 className="m-0 text-base font-semibold text-gray-900">{title}</h3>
          <button
            className="ml-2.5 bg-transparent border-none text-gray-900 cursor-pointer text-lg leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
            onClick={onClose}
            title="Back to chat"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          className="bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]"
          onClick={onCloseWindow || onClose}
          title="Close window"
        >
          ×
        </button>
      </div>

      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default PanelWrapper;
