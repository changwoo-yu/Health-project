import React from "react";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-bold">메뉴</h2>
        <button onClick={toggleSidebar} className="text-white text-2xl">
          &times;
        </button>
      </div>
      <ul className="m-8">
        <Link href="/post">
          <li className="cursor-pointer hover:text-gray-400 mb-4">게시글</li>
        </Link>
        <Link href="/user/mypage">
          <li className="cursor-pointer hover:text-gray-400 mb-4">마이페이지</li>
        </Link>
        <Link href="/user/notice">
          <li className="cursor-pointer hover:text-gray-400 mb-4">공지사항</li>
        </Link>
        <Link href="/auth/login">
          <li className="cursor-pointer hover:text-gray-400 mb-4">로그인</li>
        </Link>
        <Link href="/auth/signup">
          <li className="cursor-pointer hover:text-gray-400 mb-4">회원가입</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
