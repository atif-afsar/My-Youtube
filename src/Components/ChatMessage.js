import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center gap-2 p-2 bg-white rounded-lg shadow-md mb-2 '>
      <img
          className="h-8 w-8 rounded-full object-cover cursor-pointer"
          alt="user-logo"
          src="https://static-00.iconduck.com/assets.00/user-icon-1877x2048-xt6llked.png"
        />
        <span className='font-bold'>{name}</span>
        <span>{message}</span>

    </div>
  )
}

export default ChatMessage
