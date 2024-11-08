"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/page";
import { useAuth } from "@/app/context/AuthContext";
import ButtonHeader from "./ButtonHeader";
import { useRouter } from "next/navigation";

const FitHeader = ({ isLoggedIn, onLogout }: any) => {
  const { auth, logout } = useAuth();
  const router = usePathname();
  const route = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSidebar = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    alert("로그아웃 되었습니다!");
    route.push("/");
  };

  const handleAuth = (e: any) => {
    if (auth === false) {
      e.preventDefault();
      route.push("/auth/login");
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/banner.png)",
          backgroundSize: "cover",
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="bg-black text-white h-75 text-sm w-full"
      >
        <header className={"z-100 fixed left-0 top-0 w-[100%] p-8 flex justify-between items-center bg-gray-950"}>
          <Link className="flex items-center" href="/">
            <Image className="cursor-pointer mr-8" src="/images/WooyuFit.png" alt="Logo" width={100} height={100} />
          </Link>
          <nav className="hidden md:flex space-x-4">
            <ButtonHeader href="/post" isActive={router === "/post"}>
              게시글
            </ButtonHeader>
            <ButtonHeader href="/user/mypage" isActive={router === "/user/mypage"} onClick={handleAuth}>
              마이페이지
            </ButtonHeader>
            <ButtonHeader href="/user/notice" isActive={router === "/notice"}>
              공지사항
            </ButtonHeader>
          </nav>
          <ul className="flex flex-col space-y-2 ml-auto">
            {auth ? (
              <button onClick={handleLogout}>로그아웃</button>
            ) : (
              <div className="flex space-x-4">
                <Link href="/auth/login">
                  <span
                    className={`cursor-pointer ${
                      router === "/login" ? "text-blue-300" : "text-white"
                    } hidden md:block transition duration-200 ease-in-out hover:text-blue-350`}
                  >
                    로그인
                  </span>
                </Link>
                <Link href="/auth/signup">
                  <span
                    className={`cursor-pointer ${
                      router === "/signup" ? "text-blue-300" : "text-white"
                    } hidden md:block transition duration-200 ease-in-out hover:text-blue-350`}
                  >
                    회원가입
                  </span>
                </Link>
              </div>
            )}
          </ul>
          <button onClick={handleToggle} className="flex md:hidden ml-auto">
            <Image src="/images/arrow.png" alt="Menu" width={30} height={10} />
          </button>
        </header>
      </div>
      {isMenuOpen && <Sidebar isOpen={isMenuOpen} toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default FitHeader;