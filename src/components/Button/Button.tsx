import React, { useRef, useEffect } from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  bgColor?: string; // Оставим для обратной совместимости, но использовать не будем
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: "primary" | "secondary"; // Добавляем вариант кнопки
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  bgColor = "#202123", // оставляем для обратной совместимости
  onClick,
  className = "",
  variant = "primary", // По умолчанию основная кнопка
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Устанавливаем фон в зависимости от варианта
  useEffect(() => {
    if (buttonRef.current) {
      if (variant === "primary") {
        buttonRef.current.style.background = "#202123";
      } else {
        buttonRef.current.style.background = "#f1f3f4";
      }
    }
  }, [variant]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Предотвращаем снятие выделения
    e.stopPropagation();
    e.preventDefault();

    // Animation on click
    const button = e.currentTarget;
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);

    if (onClick) onClick(e);
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "primary") {
      e.currentTarget.style.background = "#353740";
    } else {
      e.currentTarget.style.background = "#e8eaed";
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      if (variant === "primary") {
        e.currentTarget.style.background = "#202123";
      } else {
        e.currentTarget.style.background = "#f1f3f4";
      }
    }
  };

  // Предотвращаем снятие выделения при взаимодействии
  const preventSelectionClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  // Базовые классы кнопки
  const baseClasses =
    "m-0 py-2 px-3 font-medium font-sans border-none rounded-[50px] cursor-pointer transition-all duration-200 text-sm outline-none flex items-center justify-center h-[42px] shadow-none whitespace-nowrap w-auto";

  // Классы в зависимости от варианта
  const variantClasses = {
    primary: "bg-gray-900 text-white",
    secondary: "bg-gray-100 text-gray-800",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      ref={buttonRef}
      className={buttonClasses}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={preventSelectionClear}
      onMouseUp={preventSelectionClear}
    >
      {icon && (
        <span
          className={`mr-2.5 flex items-center ${
            variant === "primary" ? "text-white" : "text-gray-800"
          }`}
        >
          {icon}
        </span>
      )}
      <span className={variant === "primary" ? "text-white" : "text-gray-800"}>
        {text}
      </span>
    </button>
  );
};

export default Button;
