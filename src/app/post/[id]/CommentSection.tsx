"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Comment {
  id: any;
  content: any;
  author: any;
  createdAt: any;
}

const CommentSection = ({ postId }: any) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:8888/posts/${postId}`);
      setComments(response.data.comments || []);
    };

    fetchPost();
  }, [postId]);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        try {
          const response = await axios.get("http://localhost:8888/users");
          const user = response.data.find((user: any) => user.id === userId);

          if (user) {
            setAuthor(user.name);
          }
        } catch (error) {
          console.error("사용자 정보를 가져오는 중 오류 발생:", error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleCommentSubmit = async (e: any) => {
    e.preventDefault();
    if (!newComment) return;

    if (!author) {
      alert("로그인 해주세요.");
      return;
    }

    const commentData = {
      content: newComment,
      createdAt: new Date().toISOString(),
      author,
    };

    try {
      const response = await axios.patch(`http://localhost:8888/posts/${postId}`, {
        comments: [...comments, commentData],
      });
      setComments(response.data.comments);
      setNewComment("");
    } catch (error) {
      console.error("댓글 등록 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <h3 className="mb-4 mt-4 p-2 border border-gray-400 rounded-lg">댓글 {comments.length}</h3>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-300 p-2">
            <div className="flex">
              <p className="mb-2 mr-4 font-bold">작성자: {comment.author}</p>
              <p className="mb-2 text-gray-600">올린 시간: {new Date(comment.createdAt).toLocaleString("ko-KR")}</p>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="flex rounded-md items-center mt-4">
        <div className="border border-gray-300 rounded-md w-[100%] flex items-end justify-end relative p-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-[100%] h-[40px] mr-5"
            placeholder="댓글을 입력하세요"
          />
          <button type="submit" className="p-2 rounded-md bg-blue-200 text-blue-800 w-[70px] h-[40px]">
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
