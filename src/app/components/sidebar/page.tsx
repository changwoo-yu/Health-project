import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ isMenu, handleToggle }: any) => {
  return (
    <div
      className={`h-[350px] w-[300px] bg-gray-800 right-0 text-white p-10 transition-transform ${
        isMenu ? "block" : "hidden"
      }`}
    >
      <button className="flex ml-auto" onClick={handleToggle}>
        <Image className="cursor-pointer" src="/images/arrow.png" alt="Menu" width={30} height={10} />
      </button>
      <ul className="mt-5">
        <Link href="/post">
          <li className="cursor-pointer mb-4">게시글</li>
        </Link>
        <Link href="/mypage">
          <li className="cursor-pointer mb-4">마이페이지</li>
        </Link>
        <Link href="/notice">
          <li className="cursor-pointer mb-4">공지사항</li>
        </Link>
        <Link href="/login">
          <li className="cursor-pointer mb-4">로그인</li>
        </Link>
        <Link href="/signup">
          <li className="cursor-pointer mb-4">회원가입</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
