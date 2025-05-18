import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const buttonNames = [
    "All", "Gaming", "Songs", "Live", "Cricket", "News", "Movies",
    "Trending", "Fashion", "Comedy", "Education", "Technology", "Podcasts"
  ];

  return (
    <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap px-4 py-2">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
