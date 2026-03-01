
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#F8F8FD] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <Image
            src="/heroImgLeft.png"
            width={530}
            height={285}
            alt="Hero Image Left"
            className="mx-auto lg:mx-0 w-full max-w-[500px] h-auto"
          />

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Great platform for the job seeker that searching for
            new career heights and passionate about startups.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/heroImgRight.png"
            width={501}
            height={707}
            alt="heroImgRight"
            className="w-full max-w-[450px] md:max-w-[500px] h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;