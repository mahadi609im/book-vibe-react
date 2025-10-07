import React from 'react';
import banner from '../assets/banner.png';
import { NavLink, useNavigate } from 'react-router';

const Banner = () => {
  const navigate = useNavigate('');

  return (
    <div className="container mx-auto px-[3%] md:px-0 bg-[#1313130d]">
      <div className="py-[48px] md:py-[56px] lg:py-[80px] px-0 md:px-[56px] lg:px-[120px] flex flex-col-reverse md:flex-row items-center justify-between gap-[32px] md:gap-[56px] lg:gap-[86px]">
        <div className="md:max-w-[560px] w-full">
          <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold mb-6 md:mb-8 lg:mb-[48px]">
            Books to freshen up your bookshelf
          </h1>
          <button
            onClick={() => navigate('/allBooks')}
            className="py-[14px] md:py-[18px] px-[20px] md:px-[28px] rounded-md md:rounded-lg border border-[#23be0a] text-[#23be0a] text-sm md:text-lg font-semibold hover:bg-[#23be0a] hover:text-white transition-all cursor-pointer"
          >
            View All Books
          </button>
        </div>
        <div className="w-1/2 md:w-[318px] h-auto">
          <img className="w-full h-full object-cover" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
