import React from 'react';
import { FaThumbsUp, FaShareAlt, FaBell } from 'react-icons/fa';

const LikeButton = () => {
  return (
    <div className="w-full max-w-[500px]  bg-gray-100 p-4 rounded-lg shadow-md mx-2.5 ">
      <div className="flex justify-between gap-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          <FaThumbsUp /> Like
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          <FaShareAlt /> Share
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          <FaBell /> Subscribe
        </button>
      </div>
    </div>
  );
};

export default LikeButton;