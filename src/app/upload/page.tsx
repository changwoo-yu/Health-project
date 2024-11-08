"use client";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import SkeletonUpload from "./SkeletonUpload";
import axios from "axios";
import { useRouter } from "next/navigation";
import TitleInput from "./TitleInput";
import QuillEditor from "./QuillEditor";

const Upload = () => {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const response = await axios.get(`http://localhost:8888/posts/${id}`);
        setPost(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserId = localStorage.getItem("userId");

      if (storedUserId) {
        setUserId(storedUserId);
        try {
          const response = await axios.get("http://localhost:8888/users");
          const user = response.data.find((user: any) => user.id === storedUserId);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonUpload />;
  }

  const handleSubmit = async () => {
    const today = new Date();
    const formattedDate = today.toLocaleString("ko-KR");
    alert("등록되었습니다.");
    const postContent = {
      title,
      content,
      createdAt: formattedDate,
      author,
      userId,
    };

    try {
      if (id) {
        // 수정 요청: ID가 있을 경우 PUT 요청
        const response = await axios.put(`http://localhost:8888/posts/${id}`, postContent);
        console.log("수정 성공:", response.data);
      } else {
        // 새 글 등록: ID가 없을 경우 POST 요청
        const response = await axios.post("http://localhost:8888/posts", postContent);
        console.log("성공한 데이터:", response.data);
      }
      router.push("/post");
    } catch (error) {
      console.error("실패한 데이터:", error);
    }
  };

  return (
    <div className="text-sm max-w-screen-lg mx-auto overflow-hidden p-4">
      <h1 className="mt-8 mb-4 text-2xl font-bold">글쓰기</h1>
      <hr className="border-gray-300 my-4" />
      <TitleInput title={title} setTitle={setTitle} />

      <div className="flex items-center flex-col mx-auto max-w-[1000px]">
        <QuillEditor content={content} setContent={setContent} />
        <div className="flex justify-center w-full mt-4">
          <button
            onClick={handleSubmit}
            className="mt-10 p-3 w-[300px] font-bold bg-blue-400 text-white rounded-md transition duration-200 ease-in-out 
                      hover:bg-blue-500 
                      active:scale-95 active:bg-blue-600 mb-12"
          >
            글 올리기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
