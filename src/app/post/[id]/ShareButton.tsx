"use client";
import React, { useState } from "react";
import Image from "next/image";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("주소가 복사되었습니다.");
      })
      .catch((err) => {
        console.error("주소 복사 실패:", err);
        alert("주소 복사에 실패했습니다.");
      });
  };

  const handleKakaoShare = () => {
    const currentUrl = window.location.href;
    const shareLink = `https://story.kakao.com/share?url=${encodeURIComponent(currentUrl)}`;

    window.open(shareLink, "_blank");
  };

  return (
    <div className="relative">
      <button
        className="p-2 rounded-md bg-white w-[80px] border transition duration-200 ease-in-out 
                      hover:bg-gray-100 
                      active:scale-95 active:bg-gray-200"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        공유
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
          <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100" onClick={handleKakaoShare}>
            <Image
              src="/images/kakaotalk-icon.png" // KakaoTalk 아이콘의 경로
              alt="KakaoTalk"
              width={24} // 아이콘의 너비
              height={24} // 아이콘의 높이
              className="mr-2"
            />
            <span>카카오톡</span>
          </div>
          <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100" onClick={handleCopy}>
            <Image
              src="/images/copy-icon.png" // 주소 복사 아이콘의 경로
              alt="주소 복사"
              width={24} // 아이콘의 너비
              height={24} // 아이콘의 높이
              className="mr-2"
            />
            <span>주소 복사</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
