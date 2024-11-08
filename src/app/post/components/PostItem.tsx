import React from "react";
import Link from "next/link";
import PostDetail from "../[id]/page";

const PostItem = ({ post, index, selectPost, handleDelete }: any) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  return (
    <li key={index} className="rounded-lg border border-gray-300 p-5 m-4">
      <div className="flex justify-between items-center">
        <Link href={`/post/${post.id}`} className="font-bold text-lg text-gray-700 cursor-pointer">
          <h2 dangerouslySetInnerHTML={{ __html: post.title }}></h2>
        </Link>
        <div className="flex">
          <p className="mb-2 text-gray-600">{post.createdAt}</p>
          <p className="text-gray-600 mb-2 ml-4">작성자: {post.author}</p>
        </div>
      </div>
      {selectPost === index && <PostDetail handleDelete={handleDelete} />}
    </li>
  );
};

export default PostItem;
