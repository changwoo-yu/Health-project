import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonMypage = () => {
  return (
    <div className="text-sm max-w-screen-lg mx-auto overflow-hidden mt-4">
      <div className="flex flex-col justify-center items-center">
        <Skeleton height={50} className="rounded-md" />
        <div className="flex flex-col mx-auto max-w-[400px] md:w-[400px]">
          <Skeleton height={50} className="mt-12" />
        </div>
        <div className="flex flex-col mt-5 mx-auto max-w-[400px] md:w-[400px]">
          <Skeleton height={50} className="mt-12" />
          <Skeleton height={50} className="mt-12" />
        </div>
        <Skeleton height={50} className="mt-12" />
      </div>
    </div>
  );
};

export default SkeletonMypage;
