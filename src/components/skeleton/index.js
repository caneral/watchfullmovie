import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = () => {
  return (
    <div className="p-2 sm:w-1/2 lg:w-1/4 text-center">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton height={250} width={250} count={1} />
        <Skeleton height={30} width={250} count={1} />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoading;
