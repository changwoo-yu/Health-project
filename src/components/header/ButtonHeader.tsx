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
      <span
        className={`${
          isActive ? "text-blue-300" : "text-white"
        } cursor-pointer transition duration-200 ease-in-out hover:text-blue-350`}
      >
        {children}
      </span>
    </Link>
  );
};

export default ButtonHeader;
