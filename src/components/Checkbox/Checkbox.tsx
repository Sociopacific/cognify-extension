import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex justify-start items-center mt-2.5 mb-0 pb-1 bg-transparent rounded-[24px] w-full">
      <label className="flex items-center cursor-pointer font-sans">
        <input
          type="checkbox"
          className="appearance-none m-0 mr-2 w-6 h-6 border-2 border-gray-400 rounded-md cursor-pointer relative bg-white transition-all duration-200 checked:bg-gray-900 checked:border-gray-900 checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2024%2024%27%20fill%3D%27white%27%20width%3D%2718px%27%20height%3D%2718px%27%3E%3Cpath%20d%3D%27M0%200h24v24H0z%27%20fill%3D%27none%27%2F%3E%3Cpath%20d%3D%27M9%2016.17L4.83%2012l-1.42%201.41L9%2019%2021%207l-1.41-1.41z%27%20stroke%3D%27white%27%20stroke-width%3D%271%27%2F%3E%3C%2Fsvg%3E')] checked:bg-center checked:bg-[length:18px_18px]"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span
          className={`text-sm transition-all duration-200 ${
            checked
              ? "font-semibold text-gray-900"
              : "font-normal text-gray-500"
          }`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
