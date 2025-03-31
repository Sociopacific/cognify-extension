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
    e.preventDefault();

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

  // Полное предотвращение пузырькового распространения событий и снятия выделения
  const preventSelectionClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className="flex items-center gap-3 py-2 px-3 bg-transparent rounded-[24px] w-full"
      onClick={preventSelectionClear}
      onMouseDown={preventSelectionClear}
      onMouseUp={preventSelectionClear}
    >
      <label
        className={`relative inline-flex items-center w-[40px] h-[20px] ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={preventSelectionClear}
        onMouseDown={preventSelectionClear}
        onMouseUp={preventSelectionClear}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
          onClick={preventSelectionClear}
          disabled={disabled}
        />
        <span
          className={`absolute inset-0 transition-colors duration-200 ease-in-out rounded-full ${
            disabled
              ? "bg-gray-200"
              : isChecked
              ? "bg-gray-900"
              : "bg-gray-100 border border-gray-300"
          }`}
          onClick={handleLabelClick}
          onMouseDown={preventSelectionClear}
          onMouseUp={preventSelectionClear}
        >
          <span
            className={`absolute top-[2px] left-[2px] w-4 h-4 transition-transform duration-200 ease-in-out rounded-full ${
              isChecked ? "bg-white translate-x-5" : "bg-white"
            }`}
            onClick={preventSelectionClear}
            onMouseDown={preventSelectionClear}
            onMouseUp={preventSelectionClear}
          />
        </span>
      </label>

      <span
        className={`text-sm transition-colors duration-200 ${
          disabled
            ? "text-gray-400 cursor-not-allowed"
            : isChecked
            ? "font-medium text-gray-900 cursor-pointer"
            : "text-gray-600 cursor-pointer"
        }`}
        onClick={handleLabelClick}
        onMouseDown={preventSelectionClear}
        onMouseUp={preventSelectionClear}
      >
        {label}
      </span>
    </div>
  );
};

export default Switch;
