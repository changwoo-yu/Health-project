import React from "react";

const UserInfo = ({ userData }: any) => {
  return (
    <div className="flex flex-col mx-auto max-w-[400px] mb-16 md:w-[500px]">
      <span className="mb-2 font-bold">아이디</span>
      <p className="mb-4 rounded-md border border-gray-300 p-3 placeholder:text-black font-bold">
        {userData?.id || ""}
      </p>

      <span className="mb-2 font-bold">이름</span>
      <p className="border border-gray-300 p-3 mb-4 rounded-md placeholder:text-black font-bold">
        {userData?.name || ""}
      </p>

      <span className="mb-2 font-bold">휴대번호</span>
      <p className="border border-gray-300 p-3 mb-4 rounded-md placeholder:text-black font-bold">
        {userData?.phone || ""}
      </p>
    </div>
  );
};

export default UserInfo;
