// import Image from "next/image";
// import React from "react";
// import LoginBtn from "./LoginBtn";
// import SignUpBtn from "./SignUpBtn";

// const Navbar = () => {
//   return (
//     <>
//       <div className="w-full">
//         <div className="max-w-[1440px] bg-[#F8F8FD] mx-auto h-[78px] flex items-center justify-between px-[124px]">
//           {/* Left Section */}
//           <div className="flex items-center gap-4">
//             <Image src="/logo.png" alt="navbar logo" width={40} height={40} />
//             <span className="text-2xl font-semibold">QuickHire</span>

//             <ul className="flex  gap-4 text-base font-medium">
//               <li className="cursor-pointer text-[#515B6F]">Find Jobs</li>
//               <li className="cursor-pointer text-[#515B6F]">
//                 Browse Companies
//               </li>
//             </ul>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">
//             <LoginBtn />
//             <SignUpBtn />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#F8F8FD]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 h-16 md:h-[78px]">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="navbar logo" width={40} height={40} />
          <span className="text-xl md:text-2xl font-semibold">
            QuickHire
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          <li className="cursor-pointer text-[#515B6F] hover:text-black transition">
            Find Jobs
          </li>
          <li className="cursor-pointer text-[#515B6F] hover:text-black transition">
            Browse Companies
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <LoginBtn />
          <SignUpBtn />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="space-y-2 text-base font-medium">
            <li className="cursor-pointer text-[#515B6F]">
              Find Jobs
            </li>
            <li className="cursor-pointer text-[#515B6F]">
              Browse Companies
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-2">
            <LoginBtn />
            <SignUpBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;