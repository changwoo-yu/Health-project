import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonPost = () => {
  return (
    <div className="text-sm max-w-screen-lg mx-auto overflow-hidden mt-36">
      <div className="flex flex-col justify-center items-center">
        <Skeleton height={40} width={1000} className="rounded-md mt-8" />
        <div className="flex flex-col mx-auto max-w-[400px] md:w-[400px] justify-center items-center mt-2">
          <Skeleton height={120} width={1000} className="mt-2" />
          <Skeleton height={120} width={1000} className="mt-2" />
          <Skeleton height={120} width={1000} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonPost;
