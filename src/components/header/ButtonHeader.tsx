import React from "react";
import Link from "next/link";

interface ButtonHeaderProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ href, isActive, children, onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      <button
        className={`text-white bg-transparent hover:bg-gray-700 active:scale-95 active:transform transition duration-200 ease-in-out rounded-md p-2 ${
          isActive ? "font-bold" : ""
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonHeader;
