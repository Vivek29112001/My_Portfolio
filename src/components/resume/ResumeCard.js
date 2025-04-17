import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const ResumeCard = ({ title, subTitle, result, des }) => {
  const maxLength = 150; // adjust as needed
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(prev => !prev);
  const displayDes =
    !expanded && des.length > maxLength ? des.slice(0, maxLength) + '...' : des;

  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-lg transition-all duration-300 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{subTitle}</p>
      <span className="text-sm text-designColor">{result}</span>
      <p className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">
        {displayDes}
      </p>
      {des.length > maxLength && (
        <button
          onClick={toggleExpanded}
          className="mt-2 text-designColor flex items-center gap-1 focus:outline-none"
        >
          {expanded ? "Show Less" : "Show More"}
          {expanded ? <HiChevronUp /> : <HiChevronDown />}
        </button>
      )}
    </div>
  );
};

export default ResumeCard;