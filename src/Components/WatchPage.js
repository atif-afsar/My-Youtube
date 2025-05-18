import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import LikeButton from "./LikeButton";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoId) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Video not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-6 px-4">
      <div className="flex">
        {/* Video Player */}
        <iframe
          className="rounded-lg shadow-md"
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Live Chat */}
        <div className="ml-4 w-1/3">
          <LiveChat />
        </div>
      </div>
      

      <div className="mt-4"><LikeButton/></div>
     
      

      
      {/* Comments Section */}
      <div className="mt-6">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;