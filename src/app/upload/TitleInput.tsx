import React from "react";

const TitleInput = ({ title, setTitle }: any) => {
  return (
    <div className="flex flex-col mx-auto max-w-[1000px]">
      <input
        className="p-2 border border-gray-300 rounded-sm w-full"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
    </div>
  );
};

export default TitleInput;
