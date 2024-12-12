"use cle";
import React, { useState } from "react";
import axios from "axios";

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  const userId = localStorage.getItem("userId");

  const handlePasswordChange = async (e: any) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("모든 필드를 입력해 주세요.");
      return;
    }

    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,25}$/;
    if (!passwordRegExp.test(newPassword)) {
      setMessage("숫자, 영문자 조합으로 8자리 이상 입력해주세요.");
      setIsTrue(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setIsTrue(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8888/users/${userId}`);

      if (response.data.password !== currentPassword) {
        setMessage("현재 비밀번호가 틀립니다.");
        setIsTrue(false);
        return;
      }

      if (newPassword === currentPassword) {
        setMessage("현재 비밀번호와 일치합니다.");
        setIsTrue(false);
        return;
      }

      await axios.patch(`http://localhost:8888/users/${userId}`, {
        password: newPassword,
      });

      setMessage("비밀번호가 변경되었습니다.");
      alert("비밀번호가 변경되었습니다.");
      setIsTrue(true);
    } catch (error) {
      console.error("비밀번호 변경 중 오류 발생:", error);
      setMessage("비밀번호 변경에 실패했습니다.");
      setIsTrue(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handlePasswordChange} className="flex flex-col mx-auto max-w-[400px] mb-16 w-full">
        <span className="mb-2 font-bold">현재 비밀번호</span>
        <input
          type="password"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="현재 비밀번호 입력"
          className="mb-4 rounded-md border border-gray-300 p-3"
        />

        <span className="mb-2 font-bold">새 비밀번호</span>
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="새 비밀번호 입력"
          className="border border-gray-300 p-3 mb-4 rounded-md"
        />

        <span className="mb-2 font-bold">비밀번호 확인</span>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="새 비밀번호 확인"
          className="border border-gray-300 p-3 mb-4 rounded-md"
        />

        {message && <p className={`${isTrue ? "text-blue-500" : "text-red-500"} text-center`}>{message}</p>}

        <button
          type="submit"
          className="mt-4 p-2 mb-4 rounded-md bg-blue-400 text-white transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600"
        >
          비밀번호 변경
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;
