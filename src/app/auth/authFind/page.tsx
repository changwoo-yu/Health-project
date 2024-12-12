"use client";
import { useEffect, useState } from "react";
import SkeletonFind from "./SkeletonFind";
import IdFind from "./IdFind";
import PwFind from "./PwFind";

const AuthFind = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonFind />;
  }
  return (
    <div>
      <div className="max-w-screen-lg mx-auto text-sm p-2 pt-4">
        <h1 className="mt-8 mb-4 text-2xl font-bold">회원정보 찾기</h1>
        <hr className="border-gray-300 my-4" />
        <div>
          <IdFind />
          <PwFind />
        </div>
      </div>
    </div>
  );
};

export default AuthFind;
