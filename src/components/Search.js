import React from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/searchresult");
  };

  return (
    <div className="top-3 mb-3 flex flex-col md:flex-row items-center w-full md:w-4/6 lg:w-2/3 justify-between bg-opacity-12 backdrop-filter backdrop-blur-md p-2 rounded-md shadow-inner-md border border-white shadow-md ml-2 md:ml-10 mt-3 md:mt-0">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="flex-shrink-0 w-6 h-6 mr-4"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
        >
          <path
            d="M19.9219 20.3906L18.1406 18.6094M10.5703 19.5C11.6814 19.5 12.7816 19.2812 13.8082 18.8559C14.8347 18.4307 15.7674 17.8075 16.5531 17.0218C17.3388 16.2362 17.962 15.3035 18.3872 14.2769C18.8124 13.2504 19.0312 12.1502 19.0312 11.0391C19.0312 9.92796 18.8124 8.82773 18.3872 7.8012C17.962 6.77467 17.3388 5.84195 16.5531 5.05628C15.7674 4.27061 14.8347 3.64738 13.8082 3.22218C12.7816 2.79697 11.6814 2.57812 10.5703 2.57813C8.32633 2.57813 6.17426 3.46954 4.58753 5.05628C3.00079 6.64301 2.10938 8.79508 2.10938 11.0391C2.10937 13.283 3.00079 15.4351 4.58753 17.0218C6.17426 18.6086 8.32633 19.5 10.5703 19.5Z"
            stroke="white"
            strokeWidth="1.33594"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="w-4 h-8 text-white text-lg md:text-2xl p-1 m-2 md:m-4">
          |
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-[70%] lg:w-[60%] h-12 rounded-full p-2 bg-transparent border-none focus:outline-none text-white font-euclid-circular-b text-sm md:text-base lg:text-lg font-semibold leading-[19.95px]"
        />
      </div>
      <button
        onClick={handleClick}
        className="w-20 h-10 bg-transparent text-white font-euclid-circular-b text-sm md:text-base font-semibold rounded-md border border-white ml-2"
      >
        Go!
      </button>
    </div>
  );
};

export default Search;
