"use client";
import { useEffect, useState } from "react";
import SkeletonMypage from "./SkeletonMypage";
import UserInfo from "./UserInfo";
import PasswordChange from "./PasswordChange";
import Withdraw from "./Withdraw";

const Mypage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

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
        <div className="flex justify-start items-center w-full">
          <h2 className="m-4 mt-8 text-2xl font-bold">내정보</h2>
        </div>
        <div className="w-full flex flex-col items-center">
          <UserInfo userData={userData} />
        </div>
        <hr className="border-blue-900 w-full" />
        
        <div>
          <h2 className="m-4 mt-8 text-2xl font-bold">비밀번호 변경</h2>
          <div className="w-full">
            <PasswordChange />
          </div>
          <hr className="border-blue-900 w-full" />
        </div>

        <div>
          <h2 className="m-4 mt-8 text-2xl font-bold">회원 탈퇴</h2>
          <div className="w-full">
            <Withdraw />
          </div>
          <hr className="border-blue-900 w-full mb-12" />
        </div>
      </div>
      <hr className="border-blue-900 w-full" />
    </div>
  );
};

export default Mypage;
