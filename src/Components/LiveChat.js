import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  // ✅ Fixed: added dispatch in dependency array
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]); // Fix: include dispatch here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!liveMessage.trim()) return;

    dispatch(
      addMessage({
        name: 'Atif Afsar',
        message: liveMessage,
      })
    );
    setLiveMessage('');
  };

  return (
    <>
      <div className="flex h-[550px] flex-col gap-2 mb-4 relative">
        <button className="absolute top-2 left-2 bg-transparent text-red-600 border border-red-600 px-4 py-1 rounded-full font-bold hover:bg-red-600 hover:text-white transition duration-300">
          LIVE
        </button>

        <div className="w-full h-full bg-gray-100 p-4 pt-12 rounded-lg shadow-md overflow-y-auto max-h-[600px] flex flex-col-reverse">
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
