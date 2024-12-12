"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ShareButton from "./ShareButton";
import CommentSection from "./CommentSection";

interface Post {
  id: any;
  title: any;
  createdAt: any;
  author: any;
  content: any;
  imageUrl: any;
  userId: any;
}

const PostDetail = ({ params }: any) => {
  const router = useRouter();
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:8888/posts/${id}`);
      setPost(response.data);
    };

    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);

    fetchPost();
  }, [id]);

  const handleEdit = () => {
    if (post && userId && post.userId === userId) {
      router.push(`/upload?id=${post.id}`);
    } else {
      alert("수정 권한이 없습니다.");
      return;
    }
  };

  const handleDelete = async () => {
    if (post && userId && post.userId === userId) {
      const isConfirmed = confirm("삭제 하시겠습니까?");

      if (isConfirmed) {
        try {
          await axios.delete(`http://localhost:8888/posts/${id}`);
          window.location.href = "/post";
        } catch (error) {
          console.error("삭제 중 오류 발생:", error);
        }
      } else {
        console.log("삭제가 취소되었습니다.");
      }
    } else {
      alert("삭제 권한이 없습니다.");
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-screen-lg mx-auto text-sm m-4 rounded-lg border border-gray-300 p-8">
      <div className="flex items-center justify-between">
        <h1 className="m-4 text-2xl" dangerouslySetInnerHTML={{ __html: post.title }}></h1>
        <div className="flex m-4">
          <p className="mb-2 text-gray-600">올린 시간: {post.createdAt}</p>
          <p className="text-gray-600 mb-2 ml-4">작성자: {post.author}</p>
        </div>
      </div>
      <hr className="border-gray-300 w-full mb-4" />
      <div className="m-4">
        <p
          className="mt-12 font-bold mb-5 text-gray-600 h-[200px]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></p>
        <img src={post.imageUrl} alt="" className="mb-4" />

        <div className="flex justify-between items-center mt-4">
          <div>
            <button
              onClick={handleEdit}
              className="mr-3 p-2 rounded-md text-white bg-blue-400 w-[80px] transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600"
            >
              수정
            </button>
            <button
              onClick={handleDelete}
              className="mr-3 p-2 rounded-md text-white bg-blue-400 w-[80px] transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600"
            >
              삭제
            </button>
          </div>
          <ShareButton />
        </div>
        <hr className="border-gray-300 w-full mt-4" />

        <CommentSection postId={id} />
      </div>
    </div>
  );
};

export default PostDetail;
