import Image from "next/image";

const FeaturedJobs = () => {
  return (
    <>
      <div className="w-full bg-white py-[72px]">
        {/* Main Container */}
        <div className="max-w-[1440px] mx-auto px-[124px]">
          {/* Header Row */}
          <div className="flex justify-between items-center">
            <p className="font-semibold text-5xl">
              Featured <span className="text-[#26A4FF]">jobs</span>
            </p>

            <div className="flex items-center gap-4 cursor-pointer">
              <p className="text-[#4640DE] font-semibold">Show all jobs</p>
              <Image
                src="/arrowIcon.png"
                width={24}
                height={24}
                alt="arrowIcon"
              />
            </div>
          </div>

          {/* Cards Section first row */}
          <div className="mt-[48px] flex gap-8">
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon9.jpg" width={48} height={48} alt="Cicon9" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
                 Email Marketing
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Revolt</p>
               <span className="text-[#515B6F]">Madrid, Spain</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Revolut is looking for Email <br /> Marketing to help team ma 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 <span className="bg-[#EB85331A] p-2 rounded-3xl">
                    <p className="text-[#EB8533] font-semibold">Marketing</p>
                 </span>
                 <span className="bg-[#56CDAD1A] p-2 rounded-3xl">
                    <p className="text-[#56CDAD] font-semibold">Design</p>
                 </span>
              </div>
            </div>
            {/* //22 */}
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon10.png" width={48} height={48} alt="Cicon10" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
                 Brand Designer
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Dropbox</p>
               <span className="text-[#515B6F]">San, Fransisco</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Dropbox is looking for  <br /> Designer to help the team 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 <span className="bg-[#EB85331A] p-2 rounded-3xl">
                    <p className="text-[#EB8533] font-semibold">Marketing</p>
                 </span>
                 <span className="bg-[#56CDAD1A] p-2 rounded-3xl">
                    <p className="text-[#4640DE] font-semibold">Business</p>
                 </span>
              </div>
            </div>


            {/* //33 */}
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon11.png" width={48} height={48} alt="Cicon11" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
                 Email Marketing
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Pitch</p>
               <span className="text-[#515B6F]">Berlin, Germany</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Pitch is looking for  <br /> Manager to join marketing 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 <span className="bg-[#EB85331A] p-2 rounded-3xl">
                    <p className="text-[#EB8533] font-semibold">Marketing</p>
                 </span>
                 
              </div>
            </div>


            {/* //44 */}
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon12.png" width={48} height={48} alt="Cicon12" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
              Visual Designer
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Blinklist</p>
               <span className="text-[#515B6F]">Granada, Spain</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Blinkist is looking for <br /> Designer to help team desi 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 
                 <span className="bg-[#56CDAD1A] p-2 rounded-3xl">
                    <p className="text-[#56CDAD] font-semibold">Design</p>
                 </span>
              </div>
            </div>

          </div>
          {/* Cards Section second row */}
          <div className="mt-[48px] flex gap-8">
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon13.png" width={48} height={48} alt="Cicon13" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
              Product Designer
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Revolt</p>
               <span className="text-[#515B6F]">Madrid, Spain</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Revolut is looking for Email <br /> Marketing to help team ma 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 <span className="bg-[#EB85331A] p-2 rounded-3xl">
                    <p className="text-[#EB8533] font-semibold">Marketing</p>
                 </span>
                 <span className="bg-[#56CDAD1A] p-2 rounded-3xl">
                    <p className="text-[#56CDAD] font-semibold">Design</p>
                 </span>
              </div>
            </div>
            {/* //22 */}
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon14.png" width={48} height={48} alt="Cicon14" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
              Lead Designer
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Dropbox</p>
               <span className="text-[#515B6F]">San, Fransisco</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Dropbox is looking for  <br /> Designer to help the team 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 <span className="bg-[#EB85331A] p-2 rounded-3xl">
                    <p className="text-[#EB8533] font-semibold">Marketing</p>
                 </span>
                 <span className="bg-[#56CDAD1A] p-2 rounded-3xl">
                    <p className="text-[#4640DE] font-semibold">Business</p>
                 </span>
              </div>
            </div>


            {/* //33 */}
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon15.png" width={48} height={48} alt="Cicon15" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
              Brand Strategist
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Pitch</p>
               <span className="text-[#515B6F]">Berlin, Germany</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Pitch is looking for  <br /> Manager to join marketing 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 <span className="bg-[#EB85331A] p-2 rounded-3xl">
                    <p className="text-[#EB8533] font-semibold">Marketing</p>
                 </span>
                 
              </div>
            </div>


            {/* //44 */}
            <div className="w-[280px] h-[314px] p-8 border border-[#D6DDEB]">
              <div className="flex justify-between">
                <Image src="/Cicon16.png" width={48} height={48} alt="Cicon16" />
                <div className="w-[91px] h-[34px] pt-[4px] pb-[4px] pl-[12px] pr-[12px] border border-[#4640DE] flex items-center justify-center">
                   <p>Full Time</p>
                </div>
              </div>

              <div className="w-[184px] h-[57px]">
              <p className="text-md font-semibold pt-4 text-[#25324B]">
              Data Analyst
              </p>

               <div className="flex justify-between">
               <p className="text-[#515B6F]">Blinklist</p>
               <span className="text-[#515B6F]">Granada, Spain</span>
               </div>

              </div>

              <p className="text-xm text-[#7C8493] py-4">
              Blinkist is looking for <br /> Designer to help team desi 
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                 
                 <span className="bg-[#56CDAD1A] p-2 rounded-3xl">
                    <p className="text-[#56CDAD] font-semibold">Design</p>
                 </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
