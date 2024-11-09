"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import SkeletonLogin from "./SkeletonLogin";
import "react-loading-skeleton/dist/skeleton.css";

const Login = ({ onLogin }: any) => {
  const [loading, setLoading] = useState(true);
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = async (e: any) => {
    e.preventDefault();

    const idInput = e.target.id.value;
    const passwordInput = e.target.password.value;

    try {
      const response = await fetch("https://my-json-server.typicode.com/changwoo-yu/Health-project/users");
      const users = await response.json();

      const user = users.find((user: any) => user.id === idInput && user.password === passwordInput);

      if (user) {
        alert("로그인 성공!");
        login(idInput);
        localStorage.setItem("userId", idInput);
        router.push("/");
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  if (loading) {
    return <SkeletonLogin />;
  }

  return (
    <div className="text-sm max-w-screen-lg mx-auto overflow-hidden mt-4">
      <div className="flex justify-end">
        <button
          className="m-4 text-gray-400 font-bold transition duration-200 ease-in-out 
                      hover:text-gray-500 
                      active:scale-95 active:text-gray-600"
        >
          관리자
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/welcome.png" alt="헬스장 기구" className="w-[400px] rounded-md " />
        <form onSubmit={handleLoginClick} className="flex flex-col mx-auto max-w-[400px] md:w-[400px]">
          <div className="flex flex-col mt-5">
            <span className="font-bold">아이디</span>
            <input
              className="border border-gray-300 p-3 mt-2 rounded-md w-full"
              type="text"
              name="id"
              placeholder="예) example@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <span className="font-bold">비밀번호</span>
            <input
              className="border border-gray-300 p-3 mt-2 rounded-md w-full"
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 font-bold rounded-md mb-5 mt-5 bg-blue-400 text-white mx-auto md:w-[400px] max-w-[400px] transition duration-200 ease-in-out 
                        hover:bg-blue-500 
                        active:scale-95 active:bg-blue-600"
          >
            로그인
          </button>
        </form>
        <div className="flex justify-center items-center text-gray-500">
          <Link href="/auth/idfind">
            <button
              className="transition duration-200 ease-in-out 
                      hover:text-gray-400 
                      active:scale-95 active:text-gray-600"
            >
              아이디 / 비밀번호 찾기
            </button>
          </Link>
        </div>
        <Link href="/auth/signup">
          <button
            className="p-2 font-bold rounded-md mt-5 mb-12 bg-gray-100 mx-auto md:w-[400px] max-w-[400px] transition duration-200 ease-in-out 
                      hover:bg-gray-200 
                      active:scale-95 active:bg-gray-300"
          >
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
