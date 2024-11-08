import Skeleton from "react-loading-skeleton";
import React from "react";

const SkeletonSignUp = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Skeleton height={40} className="rounded-md" />
        <div className="flex flex-col mx-auto max-w-[400px] md:w-[400px]">
          <Skeleton height={40} className="mt-12" />
          <Skeleton height={40} className="mt-12" />
        </div>
        <div className="flex flex-col mt-5 mx-auto max-w-[400px] md:w-[400px]">
          <Skeleton height={40} className="mt-12" />
          <Skeleton height={40} className="mt-12" />
        </div>
        <Skeleton height={3} className="mt-12" />
      </div>
    </div>
  );
};

export default SkeletonSignUp;
