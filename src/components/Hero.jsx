import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "./ui/Button";

const Hero = ({ handleSearch }) => {
  const [searchText,setSearchText]=useState('')
// console.log(searchText) 

  return (
    <div className="py-12">
      <img
        src={bannerImg}
        alt="banner Image"
        className="w-full mx-auto md:max-w-md"
      />
      <div className="text-center space-y-4">
        <h1
          className="font-thin text-7xl text-gray-900 md:max-w-[300px] md:mx-auto lg:max-w-full
                  lg:mx-auto"
        >
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best Price to browse, Search, view details and purchase od top
          flagship phones <br /> of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            //reset input state
            setSearchText("");
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Phone by Name"
            className="bg-white border border-gray-300 rounded shadow w-2/4 h-12 px-4 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          <Button type='submit' label="Search"></Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
