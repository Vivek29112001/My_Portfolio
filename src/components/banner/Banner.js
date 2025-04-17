import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-16 px-4 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b border-gray-800 bg-gradient-to-b from-gray-900 via-black to-gray-900 font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;