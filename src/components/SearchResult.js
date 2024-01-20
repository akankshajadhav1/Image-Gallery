import React from "react";
import "../App.css";
import Header from "./Header";
import Search2 from "./Serach2";
import UploadForm from "./UploadForm";

const SearchResult = () => {
  return (
    <div className="inset-0 bgpage2 h-[350px] w-full bg-cover bg-center bg-no-repeat relative">
      <div className=" p-1">
        {/* Header Section */}
        <div className="top-5 m-3 p-2">
          <Header />
        </div>

        {/* Search Section */}
        <div className="flex items-center justify-center">
          <Search2 />
        </div>

        {/* Results Section */}
        <h2 className="text-white font-euclid-circular-b text-[42.61px] items-center text-center">
          Results: Technology
        </h2>

        {/* First Section */}
        <div className="w-full items-center rounded-lg mt-2">
          <div className="w-full bg-slate-200">
            <div className="text-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 p-4">
              {/* Your content here */}
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Digital
              </div>
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Computer
              </div>
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Codierung
              </div>
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Tech
              </div>
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Netz
              </div>
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Code
              </div>
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Finanzieren
              </div>
              <div className="border border-gray-400 rounded-sm m-3 p-2 text-center">
                Netz
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UploadForm Section */}
      <div className="top-3 m-3 p-3">
        <UploadForm />
      </div>

      {/* Second Section */}
    </div>
  );
};

export default SearchResult;
