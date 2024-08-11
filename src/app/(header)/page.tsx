"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "../components/sidebar/page";

const FitHeader = () => {
  const router = usePathname();
  const loginUrl = router === "/login";
  const mypageUrl = router === "/mypage";
  const noticeUrl = router === "/notice";
  const postUrl = router === "/post";
  const signupUrl = router === "/signup";
  const [isMenu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu(!isMenu);
  };

  return (
    <div
      style={{ backgroundImage: "url(/images/gym3.jpg)", backgroundSize: "cover", height: "400px" }}
      className="bg-black text-white h-17 text-sm"
    >
      <header className="p-5 flex justify-between items-center">
        <Link className="flex items-center" href="/">
          <Image className="cursor-pointer" src="/images/Dum.png" alt="Logo" width={30} height={10} />
          <h1 className="m-1 mr-10 cursor-pointer">PoketFit</h1>
        </Link>
        <ul
          className={`flex flex-col space-y-2 text-left m-3 ${
            isMenu ? "block" : "hidden"
          } md:flex md:flex-row md:space-x-4 md:space-y-0`}
        >
          <Link href="/post">
            <li className={`cursor-pointer ${postUrl ? "text-red-400" : "text-white"}`}>게시글</li>
          </Link>
          <Link href="/mypage">
            <li className={`cursor-pointer ${mypageUrl ? "text-red-400" : "text-white"}`}>마이페이지</li>
          </Link>
          <Link href="/notice">
            <li className={`cursor-pointer ${noticeUrl ? "text-red-400" : "text-white"}`}>공지사항</li>
          </Link>
        </ul>
        <ul
          className={`flex flex-col space-y-2 ml-auto ${
            isMenu ? "block" : "hidden"
          } md:flex md:flex-row md:space-x-4 md:space-y-0`}
        >
          <Link href="/login">
            <li className={`cursor-pointer ${loginUrl ? "text-red-400" : "text-white"}`}>로그인</li>
          </Link>
          <Link href="/signup">
            <li className={`cursor-pointer ${signupUrl ? "text-red-400" : "text-white"}`}>회원가입</li>
          </Link>
        </ul>
        <button onClick={handleToggle} className="flex md:hidden ml-auto">
          <Image src="/images/arrow.png" alt="Menu" width={30} height={10} />
        </button>
        <Sidebar isMenu={isMenu} handleToggle={handleToggle} />
      </header>
    </div>
  );
};

export default FitHeader;
