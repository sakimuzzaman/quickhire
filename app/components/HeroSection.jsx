import Image from 'next/image';
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
    return (
        <div className='flex  w-[1440px] h-[794px] bg-[#F8F8FD] relative overflow-hidden'>
            <div className='w-[629px] h-[530px] pt-[160px] pl-[125px] relative z-10'>
                <Image 
                    src="/heroImgLeft.png"
                    width={530}
                    height={285}
                    alt="Hero Image Left"
                />
                <p>
                Great platform for the job seeker that searching for <br /> new career heights and passionate about startups.
                </p>

                <div className="mt-8 relative">
                      <SearchBar />
                 </div>            

            </div>

            <div className='relative'>
                <Image 
                   src="/heroImgRight.png"
                   width={501}
                   height={707}
                   alt="heroImgRight"
                   className="object-contain"
                />
            </div>

        </div>
    );
};

export default HeroSection;