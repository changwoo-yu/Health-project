"use client";
import Image from "next/image";
import BasicMap from "./map/page";
import SwiperImg from "../components/slider/page";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

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
        <div>
          <div className="font-bold">
            <h1 className="mt-8 mb-4 text-2xl font-bold">체육관 소개</h1>
            <hr className="border-gray-300 my-4" />
            <p className="text-center text-2xl mb-2">WooyuFit💪</p>
            <p className="text-center">
              프라이빗한 레슨환경 운동지도 경력 15년 이상 전문성을 가진 지도자 수업 시간 약속 철저 깨끗하고 매너있는
              헬스장 입니다.
            </p>
            <p className="mb-10 text-center font-bold">감사합니다!</p>
            <SwiperImg />
          </div>
          <div className="mt-20">
            <h1 className="text-2xl font-bold">트레이너 모집</h1>
            <hr className="border-gray-300 my-4" />
            <p className="mb-4 font-bold text-lg">우리 헬스장에서 함께할 트레이너를 모집하고 있습니다.</p>
            <div className="flex justify-between ">
              <div className="flex flex-col mr-4">
                <Image className="mb-4 rounded-md" src="/images/trainer.png" alt="트레이너1" width={300} height={100} />
                <div className="items-center">
                  <p className="font-bold text-xl">모집중</p>
                </div>
              </div>
              <div className="flex flex-col mr-4">
                <Image className="mb-4 rounded-md" src="/images/trainer.png" alt="트레이너2" width={300} height={100} />
                <div className="items-center">
                  <p className="font-bold text-xl">모집중</p>
                </div>
              </div>
              <div className="flex flex-col">
                <Image className="mb-4 rounded-md" src="/images/trainer.png" alt="트레이너3" width={300} height={100} />
                <div className="items-center">
                  <p className="font-bold text-xl">모집중</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-2xl font-bold">오시는길</h1>
            <hr className="border-gray-300 my-4" />
            <div>
              <BasicMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
