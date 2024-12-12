"use client";
import React, { useState } from "react";
import axios from "axios";

const PwFind = () => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    setUserId(e.target.value);
  };

  const handleFindId = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8888/users`);
      const users = response.data;
      const user = users.find((u: any) => u.id === userId);

      if (user) {
        const randomPassword = Math.floor(10000 + Math.random() * 90000).toString();

        await axios.patch(`http://localhost:8888/users/${user.id}`, { password: randomPassword });

        setMessage(`임시 비밀번호가 생성되었습니다: ${randomPassword}`);
      } else {
        setMessage("해당 ID로 등록된 사용자가 없습니다.");
      }
    } catch (error) {
      setMessage("비밀번호 찾기 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md m-12">
      <h2 className="text-xl font-bold mb-4">비밀번호 찾기</h2>
      <form onSubmit={handleFindId}>
        <input
          type="text"
          value={userId}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="아이디를 입력하세요"
          required
        />
        {message && <p className="mt-4 text-gray-700">{message}</p>}
        <button
          type="submit"
          className="w-full mt-4 bg-blue-400 text-white rounded-md p-2 transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600"
        >
          비밀번호 찾기
        </button>
      </form>
    </div>
  );
};

export default PwFind;
