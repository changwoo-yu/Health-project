"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Post = () => {
  const [isClick, setIsClick] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  const router = usePathname();
  const uploadUrl = router === "/upload";
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="ml-12 mr-12">
      <h1 className="m-4 mt-8 text-xl text-red-400 font-bold">전체 게시글</h1>
      <div className="flex justify-between m-4">
        <div>
          <input className="p-2 border-b border-gray-300 mt-10 mr-4" type="text" placeholder="게시글 검색" />
          <button className="border p-2 rounded-lg mb-5 bg-red-300 text-white">검색</button>
        </div>
        <Link href="upload">
          <button
            onClick={handleClick}
            className={`border p-2 rounded-lg mb-5 mt-10 bg-red-300 text-white ${
              uploadUrl ? "text-neutral-400" : "text-white"
            }`}
          >
            글 올리기
          </button>
        </Link>
      </div>
      <div>
        <main>
          <ul>
            {posts.map((post) => (
              <li key={post.id} className=" rounded-lg bg-slate-50 p-5 m-4">
                <h2 className="font-bold text-xl text-gray-700">{post.title}</h2>
                <p className="text-sm mb-5 text-gray-600">작성자: {post.author}</p>
                <p className="font-bold mb-5 text-gray-600">{post.content}</p>
                <hr className="border-gray-300 w-1000 mb-4" />
                <div className="flex justify-between">
                  <div className="flex justify-center items-center w-full">
                    <button className="mr-10 border p-2 rounded-lg bg-red-300 text-white">{post.buttons.view}</button>
                    <button className="mr-10 border p-2 rounded-lg bg-red-300 text-white">
                      {post.buttons.comment}
                    </button>
                    <button className="mr-10 border p-2 rounded-lg bg-red-300 text-white">{post.buttons.share}</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Post;
