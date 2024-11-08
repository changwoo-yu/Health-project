"use client";
import React, { useState } from "react";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button className="p-2 rounded-md bg-white w-[80px] border" onClick={() => setIsOpen((prev) => !prev)}>
        공유
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
          <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
            <img src="/path/to/kakao-icon.png" alt="KakaoTalk" className="w-6 h-6 mr-2" />
            <span>카카오톡</span>
          </div>
          <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
            <img src="/path/to/copy-icon.png" alt="주소 복사" className="w-6 h-6 mr-2" />
            <span>주소 복사</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
