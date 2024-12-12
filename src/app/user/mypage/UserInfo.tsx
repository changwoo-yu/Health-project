import React from "react";

const UserInfo = ({ userData }: any) => {
  return (
    <div className="flex flex-col mx-auto max-w-[400px] mb-16 md:w-[500px] w-full">
      <span className="mb-2 font-bold">아이디</span>
      <p className="mb-4 rounded-md border border-gray-300 p-3 placeholder:text-black font-bold">
        {userData?.id || "찾을 수 없음"}
      </p>

      <span className="mb-2 font-bold">이메일</span>
      <p className="border border-gray-300 p-3 mb-4 rounded-md placeholder:text-black font-bold">
        {userData?.email || "찾을 수 없음"}
      </p>

      <span className="mb-2 font-bold">이름</span>
      <p className="border border-gray-300 p-3 mb-4 rounded-md placeholder:text-black font-bold">
        {userData?.name || "찾을 수 없음"}
      </p>

      <span className="mb-2 font-bold">휴대번호</span>
      <p className="border border-gray-300 p-3 mb-4 rounded-md placeholder:text-black font-bold">
        {userData?.phone || "찾을 수 없음"}
      </p>
    </div>
  );
};

export default UserInfo;
