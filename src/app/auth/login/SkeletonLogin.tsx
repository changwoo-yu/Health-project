import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <Skeleton height={200} width={400} className="rounded-md" />
      <div className="flex flex-col mx-auto max-w-[400px] md:w-[400px]">
        <Skeleton height={40} className="mt-5" />
      </div>
      <div className="flex flex-col mt-5 mx-auto max-w-[400px] md:w-[400px]">
        <Skeleton height={40} />
      </div>
      <Skeleton height={40} className="mt-5 mb-5" />
    </div>
  );
};

export default SkeletonLogin;
