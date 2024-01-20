import React from "react";

const Header = () => {
  return (
    <div className="">
      <header className="rounded-lg bg-opacity-12 backdrop-filter  backdrop-blur-md p-4 shadow-inner-md border border-white shadow-md m-10 flex items-center justify-between">
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-white font-euclid-circular-b p-1 font-semibold leading-[19.95px]"
          >
            Homepage
          </a>
        </div>
        <div className="flex space-x-4 ">
          <a
            href="/login"
            className="text-white font-euclid-circular-b  font-semibold leading-[19.95px] top-5 p-1"
          >
            Login
          </a>
          <a
            href="/signUp"
            className="text-white font-euclid-circular-b font-semibold text-center w-[162.984px] h-[32.734px] flex-shrink-0 border-2 border-white rounded-lg"
          >
            Create Account
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
