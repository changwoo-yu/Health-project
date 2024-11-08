"use client";
import { useEffect, useState } from "react";
import SkeletonMypage from "./SkeletonMypage";
import UserInfo from "./UserInfo";
import PasswordChange from "./PasswordChange";
import PostItem from "@/app/post/components/PostItem";

const Mypage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 로딩 시간 조정 (예: 1초)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      console.log("Fetched data:", data);

      const userId = localStorage.getItem("userId");
      console.log("User ID from localStorage:", userId);

      if (userId) {
        const userPosts = data.filter((post: any) => post.userId === userId);
        console.log("Filtered posts:", userPosts);
        setPosts(userPosts);
      } else {
        setPosts(data);
      }
    };
    fetchData();
  }, []);

  const getUserData = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const url = "http://localhost:8888/users";
      const response = await fetch(url);
      const data = await response.json();
      const user = data.find((user: any) => user.id === userId);
      setUserData(user);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return <SkeletonMypage />;
  }

  return (
    <div className="max-w-screen-lg mx-auto text-sm mt-4">
      <div>
        <div className="flex justify-start items-center">
          <h2 className="m-4 mt-8 text-2xl font-bold">내정보</h2>
        </div>
        <div className="w-full flex flex-col items-center">
          <UserInfo userData={userData} />
        </div>
        <hr className="border-blue-900 w-full" />
        <div className="flex flex-col">
          <h2 className="m-4 mt-8 text-2xl font-bold">비밀번호 변경</h2>
          <PasswordChange />
        </div>
      </div>

      <hr className="border-blue-900 w-full" />
      <div className="flex flex-col"></div>
    </div>
  );
};

export default Mypage;
