import React from 'react'

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-semibold bg-gradient-to-r from-designColor to-purple-500 text-transparent bg-clip-text tracking-widest">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-white font-extrabold capitalize drop-shadow-xl">
        {des}
      </h1>
    </div>
  );
}

export default Title