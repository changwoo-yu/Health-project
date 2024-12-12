"use client";
import React, { useState } from "react";
import axios from "axios";

const IdFind = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleFindId = async (e: any) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setMessage("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8888/users`);
      const users = response.data;
      const user = users.find((u: any) => u.email === email);

      if (user) {
        const userId = user.id;
        setMessage(`사용자의 ID는: ${userId}입니다.`);
      } else {
        setMessage("해당 이메일로 등록된 사용자가 없습니다.");
      }
    } catch (error) {
      setMessage("아이디 찾기 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md m-12">
      <h2 className="text-xl font-bold mb-4">아이디 찾기</h2>
      <form onSubmit={handleFindId}>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          placeholder="등록된 이메일을 입력하세요"
          required
        />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-400 text-white rounded-md p-2 transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600"
        >
          아이디 찾기
        </button>
      </form>
      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </div>
  );
};

export default IdFind;
