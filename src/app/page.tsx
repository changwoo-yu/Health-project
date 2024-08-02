"use client";
import Image from "next/image";
import BasicMap from "./(header)/map/page";
import SwiperImg from "./(header)/slider/page";

const Home = () => {
  return (
    <div>
      <div className="text-slate-700 w-full h-full place-items-center mx-auto max-w-[1000px] font-bold">
        <div className="mt-10 min-w-[1000px]">
          <h1 className="text-xl text-red-400 font-bold">체육관 소개</h1>
          <hr className="border-gray-300 my-4" />
          <p className="text-center text-2xl">PoketFit💪</p>
          <p className="text-center text-gray-500">
            프라이빗한 레슨환경 운동지도 경력 15년 이상 전문성을 가진 지도자 수업 시간 약속 철저 깨끗하고 매너있는
            헬스장 입니다.
          </p>
          <p className="mb-10 text-center text-gray-500">감사합니다</p>
          <SwiperImg />
        </div>
        <div className="min-w-[1000px] mt-20">
          <h1 className="text-xl text-red-400 font-bold">트레이너 소개</h1>
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-between">
            <div className="flex border border-black bg-gray-800">
              <Image className=" mr-3" src="/images/user2.jpg" alt="트레이너1" width={300} height={100} />
              <div className="text-lg text-white items-center">
                <p className="mt-5">* 트레이너 경력 20년</p>
                <p>* 헬스장 3회 경험</p>
                <p>* 마라톤 대회 수상</p>
                <p>* PT 경험 30회</p>
                <p>* 3대 700</p>
              </div>
            </div>
            <div className="flex border border-black bg-gray-800">
              <Image className=" mr-3" src="/images/user2.jpg" alt="트레이너2" width={300} height={100} />
              <div className=" mt-7 text-lg text-white">
                <p>* 경력 10년</p>
                <p>* 런닝머신 뛰기</p>
                <p>* 자전거 자격증</p>
                <p>* PT 경험 3회</p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[1000px] mt-20">
          <h1 className="text-xl text-red-400 font-bold">오시는길</h1>
          <hr className="border-gray-300 my-4" />
          <div>
            <BasicMap />
          </div>
          <div>
            <hr className="border-gray-300 my-4" />
            <p className="mb-3  text-red-400 ">위치</p>
            <p className="text-gray-500">1321515번지 포켓 헬스장</p>
            <hr className="border-gray-300 my-4" />
            <p className="mb-3  text-red-400">전화</p>
            <p className="text-gray-500">070-1213-2135</p>

            <hr className="border-gray-300 my-4" />
            <h1 className="mb-3  text-red-400">영업시간</h1>
            <p className="mb-1 text-gray-500">월 ~ 토 : 오전 6시 ~ 오후 10시</p>
            <p className="mb-20 text-gray-500">매주 일요일 휴무</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
