import React from "react";
import PostItem from "./PostItem";

const PostList = ({ lists, selectPost, handlePostClick, handleDelete }: any) => {
  return (
    <ul className="mb-12">
      {lists.map((post: any) => (
        <PostItem
          key={post.id}
          post={post}
          selectPost={selectPost}
          handlePostClick={handlePostClick}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default PostList;
