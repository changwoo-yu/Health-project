"use client";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-sm max-w-screen-lg mx-auto overflow-hidden mt-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex mt-12">
            <Skeleton height={200} width={300} className="mt-12 m-4" />
            <Skeleton height={200} width={300} className="mt-12 m-4" />
            <Skeleton height={200} width={300} className="mt-12 m-4" />
          </div>
          <div className="flex mt-12 ">
            <Skeleton height={200} width={300} className="mt-12 m-4" />
            <Skeleton height={200} width={300} className="mt-12 m-4" />
            <Skeleton height={200} width={300} className="mt-12 m-4" />
          </div>
          <Skeleton height={3} className="mt-12" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="max-w-screen-lg mx-auto text-sm p-4">
        <h1 className="mt-8 mb-4 text-2xl font-bold">회원정보 찾기</h1>
        <hr className="border-gray-300 my-4" />
        <div>
          <button
            className="p-2 mr-2 font-bold rounded-md mt-2 mb-12 bg-gray-100 mx-auto md:w-[200px] max-w-[200px] transition duration-200 ease-in-out 
          hover:bg-gray-200 
          active:scale-95 active:bg-gray-300"
          >
            아이디(이메일)찾기
          </button>
          <button
            className="p-2 mr-2 font-bold rounded-md mt-2 mb-12 bg-gray-100 mx-auto md:w-[200px] max-w-[200px] transition duration-200 ease-in-out 
          hover:bg-gray-200 
          active:scale-95 active:bg-gray-300"
          >
            비밀번호찾기
          </button>
        </div>
        <div>
          <div>
            <span className="mr-4 font-bold">이름</span>
          </div>
          <input type="text" name="name" placeholder="홍길동" className="p-2 border border-gray-300 rounded-md mt-2" />
          <div className="justify-center items-center mt-8">
            <span className="mr-4 font-bold">휴대폰번호</span>
            <div className="flex">
              <input
                type="text"
                name="name"
                placeholder="01012345678"
                className="p-2 border border-gray-300 rounded-md mt-4"
              />
              <button
                className="mt-4 ml-4 font-bold rounded-md bg-gray-100 mx-auto md:w-[200px] max-w-[200px] transition duration-200 ease-in-out 
          hover:bg-gray-200 
          active:scale-95 active:bg-gray-300"
              >
                인증번호 전송
              </button>
            </div>
            <div className="flex">
              <input
                type="text"
                name="name"
                placeholder="01012345678"
                className="p-2 border border-gray-300 rounded-md mt-4"
              />
              <button
                className="mt-4 ml-4 font-bold rounded-md bg-gray-100 mx-auto md:w-[200px] max-w-[200px] transition duration-200 ease-in-out 
          hover:bg-gray-200 
          active:scale-95 active:bg-gray-300"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
