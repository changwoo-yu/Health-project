import React from "react";

interface UseAgreeProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UseAgree: React.FC<UseAgreeProps> = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex justify-center items-center">
      <input type="checkbox" className="form-checkbox h-5 w-5" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default UseAgree;
