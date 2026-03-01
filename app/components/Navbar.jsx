import Image from 'next/image';
import React from 'react';
import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';

const Navbar = () => {
    return (
        <>
            {/* <div className='flex justify-between w-[1440px] h-[78px] left-[124px] right-[124px]'>
                <Image  
                  src="/logo.png"
                  alt='navbar logo'
                  width={40}
                  height={40}
                />  

                <span className='w-[112px] text-3xl'>QuickHire</span>  

              
                <ul>
                    <li>Find Jobs</li>
                    <li>Browse Companies</li>
                   
                </ul>    
        

            <div className='flex gap-[10px]'>
                <LoginBtn />
                <SignUpBtn />
            </div>

            </div> */}

<div className="w-full">
      <div className="max-w-[1440px] bg-[#F8F8FD] mx-auto h-[78px] flex items-center justify-between px-[124px]">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="navbar logo"
            width={40}
            height={40}
          />
          <span className="text-2xl font-semibold">
            QuickHire
          </span>

          <ul className="flex  gap-4 text-base font-medium">
          <li className="cursor-pointer text-[#515B6F]">
            Find Jobs
          </li>
          <li className="cursor-pointer text-[#515B6F]">
            Browse Companies
          </li>
        </ul>


        </div>

      
        

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <LoginBtn />
          <SignUpBtn />
        </div>

      </div>
    </div>

              
        </>
    );
};

export default Navbar;