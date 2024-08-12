"use client";
import { useEffect, useState } from "react";

const Mypage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    const getTitle = localStorage.getItem("title");
    const getContent = localStorage.getItem("content");
    const localPosts: { title: any; content: any }[] = [];
    if (getTitle && getContent) {
      const post = { title: JSON.parse(getTitle), content: JSON.parse(getContent) };
      localPosts.push(post);
    }

    const fetchData = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      setPosts([...localPosts, ...data]);
    };
    fetchData();
  }, []);

  return (
    <div className="ml-12 mr-12">
      <h1 className="m-4 mt-8 text-xl text-red-400 font-bold">마이페이지</h1>
      <div>
        <div className="w-full flex flex-col items-center">
          <h2 className="m-4 mt-8 text-xl text-red-400 font-bold">내정보</h2>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[500px] ml-4 flex justify-between rounded-xl border border-gray-400 p-4 mb-5">
            <p className="text-gray-600">이름</p>
            <p className="text-gray-600">유창우</p>
          </div>
          <div className="w-[500px] ml-4 rounded-xl flex justify-between border border-gray-400 p-4 mb-12">
            <p className="">이메일</p>
            <p className="">changwooyu1213@gmail.com</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="m-4 mt-8 text-xl text-red-400 font-bold">비밀번호 변경</h2>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col ml-4 w-[500px] ">
            <input
              type="text"
              name="id"
              placeholder="현재 비밀번호"
              className=" mb-4 rounded-xl border border-gray-400 p-4"
            />
            <input
              type="password"
              name="password"
              placeholder="새 비밀번호"
              className="border border-gray-400 p-4 mb-4 rounded-xl"
            />
            <input
              type="password"
              name="passwordCheck"
              placeholder="새 비밀번호 확인"
              className="border border-gray-400 p-4 mb-4 rounded-xl"
            />
            <div className="flex justify-end">
              <button className=" p-2 mb-4 rounded-xl bg-red-400 text-white w-[100px]">변경하기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="m-4 mt-8 text-xl text-red-400 font-bold">내가 올린 글</h1>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center">
          {posts.map((post, index) => (
            <li key={index} className=" rounded-lg bg-slate-50 p-5 m-4 w-[500px]">
              <h2 className="font-bold text-xl text-gray-700" dangerouslySetInnerHTML={{ __html: post.title }}></h2>
              <p className="text-sm mb-5 text-gray-600">작성자: {post.author}</p>
              <p className="font-bold mb-5 text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }}></p>
              <hr className="border-gray-300 w-1000 mb-4" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mypage;
