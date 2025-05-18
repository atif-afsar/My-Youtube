import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="px-4 py-1 mx-2 my-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;
