"use client";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Notice = () => {
  const [loading, setLoading] = useState(true);
  const notices = [
    {
      title: "산책할 사람 모집",
      date: "2024년 7월 3일 ~ ",
      description:
        "혼자 산책하기 외로운 사람들을 위해 산책할 사람들을 모집하고 있습니다. 밤 9시 부터 12시까지 공원 산책합니다.혼자 산책하기 외로운 사람들을 위해 산책할 사람들을 모집하고 있습니다. 밤 9시 부터 12시까지 공원 산책합니다혼자 산책하기 외로운 사람들을 위해 산책할 사람들을 모집하고 있습니다. 밤 9시 부터 12시까지 공원 산책합니다",
    },
    {
      title: "독서 모임 안내",
      date: "2024년 8월 5일 ~ ",
      description: "책을 사랑하는 사람들을 위해 독서 모임을 개최합니다. 매주 금요일 저녁 7시에 모입니다.",
    },
    {
      title: "요가 클래스 모집",
      date: "2024년 9월 1일 ~ ",
      description: "건강한 몸을 위한 요가 클래스를 모집합니다. 매주 수요일 오전 10시에 진행됩니다.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col mx-auto max-w-[400px] md:w-[400px] mt-32">
            <Skeleton height={200} width={400} className="rounded-md" />
            <Skeleton height={200} width={400} className="mt-12" />
            <Skeleton height={200} width={400} className="mt-12" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto text-sm h-[100vh]">
      <h1 className="m-4 mt-12 text-2xl font-bold">공지사항</h1>
      <div className="flex items-center justify-center mt-10 flex-wrap">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="flex border border-gray-300 p-4 m-4 rounded-md w-full max-w-[700px] flex-col sm:flex-row"
          >
            <div className="flex-1 flex flex-col">
              <h2 className="text-left text-lg font-bold">{notice.title}</h2>
              <p className="text-left text-blue-900 mb-5">{notice.date}</p>
              <p className="mr-8 flex-1">{notice.description}</p>
            </div>
            <div className="flex items-center">
              <img src="/images/welcome.png" alt="공지사항 사진" className="mx-auto m-4 max-w-[150px] h-[150px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
