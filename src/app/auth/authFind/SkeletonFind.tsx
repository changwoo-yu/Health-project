import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonFind = () => {
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
};

export default SkeletonFind;
