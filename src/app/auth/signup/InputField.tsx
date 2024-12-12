import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  isValid: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, value, onChange, message, isValid }) => {
  return (
    <div className="flex flex-col mb-4 mx-auto max-w-[400px] md:w-[400px] w-full">
      <span className="font-bold">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 border border-gray-300 rounded-md mt-2"
        value={value}
        onChange={onChange}
      />
      <p className={`mt-2 ${isValid ? "text-blue-600" : "text-red-600"}`}>{message}</p>
    </div>
  );
};

export default InputField;
