"use client";

import React from "react";

const Signup = () => {
  return (
    <div className="ml-12 mr-12 ">
      <div className="flex justify-center items-center mb-10">
        <h1 className="m-4 mt-8 text-xl text-red-400 font-bold">회원가입</h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center mb-5">
        <input
          type="text"
          name="id"
          placeholder="아이디(이메일)"
          className="p-2 border border-red-300 rounded-xl w-[400px] "
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center mb-5">
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="p-2 border border-red-300 rounded-xl w-[400px]"
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center mb-5">
        <input
          type="password"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          className="p-2 border border-red-300 rounded-xl w-[400px]"
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center mb-5 ">
        <input
          type="text"
          name="password"
          placeholder="이름"
          className="p-2 border border-red-300 rounded-xl w-[400px]"
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center mb-5">
        <input
          type="text"
          name="phone"
          placeholder="휴대폰 번호"
          className="p-2 border border-red-300 rounded-xl w-[400px]"
        />
      </div>
      <div className="flex justify-center items-center mb-16 text-sm ">
        <button className="rounded-xl border border-gray-400 text-red-400 p-2">휴대폰 인증</button>
      </div>
      <div className="flex justify-center items-center mb-10 ">
        <button className=" p-4 rounded-xl bg-red-400 text-white">가입하기</button>
      </div>
    </div>
  );
};

export default Signup;
