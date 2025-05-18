import React from 'react';
import {
  AiFillHome,
  AiOutlinePlayCircle,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import { MdMusicNote, MdLiveTv } from 'react-icons/md';
import { GiSoccerBall } from 'react-icons/gi';
import { FaGamepad, FaFilm, FaClock } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-56 min-w-[220px] max-w-[250px] p-4 text-[15px] bg-white shadow-md sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto scrollbar-thin hidden sm:block">
      {/* Main Section */}
      <ul className="mb-4">
        <SidebarItem to="/" icon={<AiFillHome />} label="Home" />
        <SidebarItem to="/shorts" icon={<AiOutlinePlayCircle />} label="Shorts" />
        <SidebarItem to="/videos" icon={<AiOutlineVideoCamera />} label="Videos" />
        <SidebarItem to="/live" icon={<MdLiveTv />} label="Live" />
      </ul>

      <hr className="my-2 border-gray-300" />

      {/* Subscriptions */}
      <h2 className="font-semibold text-gray-600 mt-4 mb-2">Subscriptions</h2>
      <ul className="mb-4">
        <SidebarItem to="/music" icon={<MdMusicNote />} label="Music" />
        <SidebarItem to="/sports" icon={<GiSoccerBall />} label="Sports" />
        <SidebarItem to="/gaming" icon={<FaGamepad />} label="Gaming" />
        <SidebarItem to="/movies" icon={<FaFilm />} label="Movies" />
      </ul>

      <hr className="my-2 border-gray-300" />

      {/* Watch Later */}
      <h2 className="font-semibold text-gray-600 mt-4 mb-2">Watch Later</h2>
      <ul>
        <SidebarItem to="/watch-later/music" icon={<FaClock />} label="Music" />
        <SidebarItem to="/watch-later/sports" icon={<FaClock />} label="Sports" />
        <SidebarItem to="/watch-later/gaming" icon={<FaClock />} label="Gaming" />
        <SidebarItem to="/watch-later/movies" icon={<FaClock />} label="Movies" />
      </ul>
    </div>
  );
};

// SidebarItem now uses Link to navigate
const SidebarItem = ({ icon, label, to }) => (
  <li>
    <Link
      to={to}
      className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 text-black"
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

export default Sidebar;
