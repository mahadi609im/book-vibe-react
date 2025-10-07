import React from 'react';
import { useRouteError } from 'react-router';

const Errorpage = () => {
  const { statusText, data } = useRouteError();
  return (
    <div className="h-screen bg-gray-100 w-full p-[100px] flex justify-center items-center  rounded-2xl text-center">
      <div>
        <h3 className="text-[#13131399] text-2xl font-medium">{statusText}</h3>
        <p className="text-[#13131399] text-lg font-medium">{data}</p>
      </div>
    </div>
  );
};

export default Errorpage;
