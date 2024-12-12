"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const Withdraw = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { auth, logout } = useAuth();

  const userId = localStorage.getItem("userId");

  const handleWithdraw = async (e: any) => {
    e.preventDefault();

    if (!currentPassword) {
      setMessage("현재 비밀번호를 입력해 주세요.");
      return;
    }

    const confirmWithdraw = window.confirm("탈퇴하시겠습니까?");

    if (confirmWithdraw) {
      try {
        const response = await axios.delete(`http://localhost:8888/users/${userId}`, {
          data: { userId, password: currentPassword },
        });

        if (response.data) {
          logout();
          alert("회원탈퇴가 완료되었습니다.");
          router.push("/");
        }
      } catch (error) {
        console.error("탈퇴 중 오류 발생:", error);
        setMessage("탈퇴 처리에 실패했습니다.");
      }
    } else {
      setMessage("회원탈퇴가 취소되었습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleWithdraw} className="flex flex-col mx-auto max-w-[400px] mb-16 md:w-[500px] w-full">
        <span className="mb-2 font-bold">현재 비밀번호</span>
        <input
          type="password"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="현재 비밀번호 입력"
          className="mb-4 rounded-md border border-gray-300 p-3"
        />
        {message && <p className="text-red-500 text-center">{message}</p>}
        <p className="text-xs text-gray-600 text-center">탈퇴 후에는 계정이 복구되지 않으니 신중하게 선택해 주세요.</p>
        <button
          type="submit"
          className="mt-4 p-2 mb-4 rounded-md bg-blue-400 text-white transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600"
        >
          탈퇴하기
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
