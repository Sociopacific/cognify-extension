import React from "react";

interface SwitchProps {
  label: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  isChecked,
  onChange,
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (!disabled) {
      onChange(e.target.checked);
    }
  };

  const handleLabelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!disabled) {
      onChange(!isChecked);
    }
  };

  const preventBubbling = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="flex items-center mt-1.5 mb-0 px-3 pb-2 bg-transparent rounded-[24px] w-full"
      onClick={preventBubbling}
      onMouseDown={preventBubbling}
      onMouseUp={preventBubbling}
    >
      <label
        className={`relative inline-block w-[46px] h-6 mr-2.5 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={preventBubbling}
        onMouseDown={preventBubbling}
      >
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={isChecked}
          onChange={handleChange}
          onClick={preventBubbling}
          disabled={disabled}
        />
        <span
          className={`absolute cursor-pointer inset-0 ${
            disabled
              ? "bg-gray-200"
              : isChecked
              ? "bg-gray-900"
              : "bg-transparent border-2 border-gray-900"
          } transition-all duration-400 rounded-[34px]`}
          onClick={handleLabelClick}
          onMouseDown={preventBubbling}
        >
          <span
            className={`absolute h-4 w-4 transition-all duration-400 rounded-full ${
              isChecked ? "bg-white" : "bg-black"
            }`}
            style={{
              transform: isChecked ? "translateX(22px)" : "translateX(0)",
              top: "2px",
              left: isChecked ? "auto" : "2px",
              right: isChecked ? "2px" : "auto",
            }}
            onClick={preventBubbling}
          ></span>
        </span>
      </label>

      <span
        className={`text-sm font-normal transition-all duration-200 ${
          disabled
            ? "text-gray-400 cursor-not-allowed"
            : isChecked
            ? "font-semibold text-gray-900 cursor-pointer"
            : "text-gray-500 cursor-pointer"
        }`}
        onClick={handleLabelClick}
        onMouseDown={preventBubbling}
      >
        {label}
      </span>
    </div>
  );
};

export default Switch;
