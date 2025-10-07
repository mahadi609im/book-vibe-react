import React from 'react';

const LoadingUi = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[36px] w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          className="card bg-base-100 w-full border border-[#13131326] p-6 shadow-sm cursor-pointer"
          key={i}
        >
          <div className="flex justify-center items-center w-full bg-[#F3F3F3] py-8 h-auto rounded-2xl">
            <div className="skeleton max-w-[120px] w-full h-[166px]"></div>
          </div>
          <div className="card-body space-y-3">
            <div className="flex gap-6">
              <p className="skeleton h-4 w-28"></p>
              <p className="skeleton h-4 w-6"></p>
            </div>
            <div className="skeleton h-4 w-40"></div>
            <div className="border border-dashed w-full border-[#13131326] my-5"></div>
            <div className="flex justify-between">
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingUi;
