import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative overflow-hidden">
      <img
        className="z-20 rounded-xl shadow-2xl transform hover:scale-110 transition duration-500 ease-in-out hover:brightness-110"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#1e2024] via-[#202327] to-[#1e2024] opacity-50 blur-md animate-pulse"></div>
    </div>
  );
}

export default RightBanner