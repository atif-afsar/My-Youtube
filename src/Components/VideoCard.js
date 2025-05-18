import React from 'react';

const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-full p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white min-h-[320px] flex flex-col">
      <img
        src={thumbnails?.medium?.url}
        alt="video thumbnail"
        className="rounded-xl w-full aspect-video object-cover"
      />
      <div className="mt-3 flex flex-col justify-between flex-1">
        <h2 className="text-sm md:text-base font-semibold text-black line-clamp-2">
          {title}
        </h2>
        <p className="text-xs text-gray-600 mt-1">{channelTitle}</p>
        <p className="text-xs text-gray-500 mt-0.5">
          {Number(statistics.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
