import React from "react";

interface ContextBadgeProps {
  onClick: () => void;
}

const ContextBadge: React.FC<ContextBadgeProps> = ({ onClick }) => {
  return (
    <span
      className="inline-flex items-center bg-black text-white rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#00b8dd] hover:-translate-y-0.5 active:translate-y-0 mt-2"
      onClick={onClick}
    >
      Context
    </span>
  );
};

export default ContextBadge;
