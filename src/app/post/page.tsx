"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./components/SearchBar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import SkeletonPost from "./components/SkeletonPost";
import PostList from "./components/PostList";

const Post = () => {
  const [isClick, setIsClick] = useState(false);
  const [selectPost, setSelectPost] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [lists, setList] = useState<any[]>([]);
  const { auth, logout } = useAuth();
  const route = useRouter();

  const getList = async () => {
    const url = `http://localhost:8888/posts`;
    const response = await fetch(url);
    const data = await response.json();
    setList(data);
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  const router = usePathname();
  const uploadUrl = router === "/upload";
  const handleClick = (e: any) => {
    setIsClick(!isClick);
    if (auth === false) {
      e.preventDefault();
      route.push("/auth/login");
    }
  };

  const handlePostClick = (index: number) => {
    setSelectPost(selectPost === index ? null : index);
  };

  const routed = useRouter();
  const search = (e: any) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      routed.push(`/${keyword}`);
    }
  };

  const handleDelete = async (postId: any) => {
    const response = await axios.delete(`http://localhost:8888/posts/${postId}`);
    console.log("삭제된 데이터:", response.data);
    getList();
  };

  if (loading) {
    return <SkeletonPost />;
  }

  return (
    <div className="max-w-screen-lg mx-auto text-sm mt-4">
      <div className="flex justify-between items-center">
        <h1 className="m-4 mt-8 text-2xl font-bold">게시글</h1>
        <Link href="upload">
          <button
            onClick={handleClick}
            className={`mr-4 p-2 rounded-md bg-blue-400 text-white ${
              uploadUrl ? "text-neutral-400" : "text-white"
            } transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600`}
          >
            글 올리기
          </button>
        </Link>
      </div>

      <SearchBar onSearch={search} />
      <PostList lists={lists} selectPost={selectPost} handlePostClick={handlePostClick} handleDelete={handleDelete} />
    </div>
  );
};

export default Post;
