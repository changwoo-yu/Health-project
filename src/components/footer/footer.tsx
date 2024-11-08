import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

const FitFooter = () => {
  return (
    <div className="flex sm:flex-row justify-center items-center bg-gray-950 p-16 text-sm">
      <div className="flex flex-col sm:flex-row sm:mr-24 w-full sm:w-[800px]">
        <h2 className="text-2xl text-gray-400 text-center sm:text-left sm:mr-12 mb-4 sm:mb-0">WooyuFit</h2>
        <div className="flex flex-col sm:flex-row">
          <div className="mb-4 sm:mb-0 sm:mr-12">
            <p className="mb-2 text-white font-bold">위치</p>
            <p className="text-gray-400">1321515번지 포켓 헬스장</p>
          </div>
          <div className="mb-4 sm:mb-0 sm:mr-12">
            <p className="mb-2 text-white font-bold">전화</p>
            <p className="text-gray-400">070-1213-2135</p>
          </div>
          <div className="mb-4 sm:mb-0 sm:mr-12">
            <p className="mb-2 text-white font-bold">영업시간</p>
            <p className="mb-1 text-gray-400">월 ~ 토 : 오전 6시 ~ 오후 10시</p>
            <p className="text-gray-400">매주 일요일 휴무</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default FitFooter;
