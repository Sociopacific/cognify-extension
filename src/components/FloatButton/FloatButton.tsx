import React from "react";

interface FloatButtonProps {
  onClick: () => void;
  icon: string;
}

const FloatButton: React.FC<FloatButtonProps> = ({ onClick, icon }) => {
  return (
    <div
      className="fixed bottom-7 right-7 w-14 h-14 rounded-full bg-gray-900 shadow-lg cursor-pointer z-[10000] flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
      onClick={onClick}
      style={{
        pointerEvents: "auto" as React.CSSProperties["pointerEvents"],
      }}
    >
      <img
        src={icon}
        alt="Chat"
        className="w-6 h-6 filter brightness-0 invert"
      />
    </div>
  );
};

export default FloatButton;
