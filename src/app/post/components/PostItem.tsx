import React from "react";
import Link from "next/link";
import PostDetail from "../[id]/page";

const PostItem = ({ post, index, selectPost, handleDelete }: any) => {
  return (
    <li
      key={index}
      className="rounded-lg shadow-md border bg-white p-4 m-4 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex flex-col justify-start items-start">
        <Link href={`/post/${post.id}`} className="font-bold text-lg cursor-pointer">
          <h2 className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: post.title }}></h2>
        </Link>
        <div className="text-gray-600 mt-2">
          <span className="text-gray-600">{post.createdAt}</span>
          <span className="text-gray-600 ml-4">작성자: {post.author}</span>
        </div>
      </div>
      {selectPost === index && <PostDetail handleDelete={handleDelete} />}
    </li>
  );
};

export default PostItem;
