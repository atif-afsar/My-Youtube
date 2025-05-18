import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const query = searchQuery; 
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }else
      if (query.trim()) {
        getSearchSuggestions(query);
      } else {
        setSuggestions([]);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async (query) => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + query);
      const json = await data.json();
      setSuggestions(json[1]); 

      dispatch(cacheResults({
        [searchQuery]: json[1]
      }))
      
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchIcon = (
    <svg
      className="w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-12 items-center p-4 shadow-md bg-white sticky top-0 z-50">
      {/* Left - Menu & Logo */}
      <div className="flex items-center col-span-2 space-x-4">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer"
          alt="menu"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
        />
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
        />
      </div>

      {/* Middle - Search */}
      <div className="col-span-8 flex justify-center">
        <div className="flex flex-col w-2/3 max-w-xl relative">
          {/* Input and button */}
          <div className="flex">
            <input
              className="flex-1 border border-gray-300 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} // slight delay to allow clicks
            />
            <button className="border border-gray-300 px-4 py-2 bg-gray-100 rounded-r-full hover:bg-gray-200">
              {searchIcon}
            </button>
          </div>

          {/* Suggestion Box */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 z-50 overflow-hidden text-sm">
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => setSearchQuery(s)} // auto-fill input
                >
                  {searchIcon} {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Right - User Icon */}
      <div className="flex justify-end col-span-2">
        <img
          className="h-8 w-8 rounded-full object-cover cursor-pointer"
          alt="user-logo"
          src="https://static-00.iconduck.com/assets.00/user-icon-1877x2048-xt6llked.png"
        />
      </div>
    </div>
  );
};

export default Head;
