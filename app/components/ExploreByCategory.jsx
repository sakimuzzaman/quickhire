import Image from "next/image";

const ExploreByCategory = () => {
  return (
    <>
      <div className="w-full bg-white py-[72px]">
        {/* Main Container */}
        <div className="max-w-[1440px] mx-auto px-[124px]">
          {/* Header Row */}
          <div className="flex justify-between items-center">
            <p className="font-semibold text-5xl">
              Explore by <span className="text-[#26A4FF]">category</span>
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
            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB]">
              <Image src="/Cicon1.png" width={48} height={48} alt="Cicon1" />

              <p className="text-lg font-semibold pt-4 text-[#25324B]">
                Design
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#7C8493]">235 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>

            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB]">
              <Image src="/Cicon2.png" width={48} height={48} alt="Cicon2" />

              <p className="text-lg font-semibold pt-4 text-[#25324B]">Sales</p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#7C8493]">756 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>

            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB] bg-[#4640DE]">
              <Image src="/Cicon3.png" width={48} height={48} alt="Cicon3" />

              <p className="text-lg font-semibold pt-4 text-[#FFFFFF]">
                Marketing
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#FFFFFF]">140 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>

            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB]">
              <Image src="/Cicon4.png" width={48} height={48} alt="Cicon4" />

              <p className="text-lg font-semibold pt-4 text-[#25324B]">
                Finance
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#7C8493]">325 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>
          </div>
              {/* Cards Section second row */}
          <div className="mt-[48px] flex gap-8">
            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB]">
              <Image src="/Cicon5.png" width={48} height={48} alt="Cicon5" />

              <p className="text-lg font-semibold pt-4 text-[#25324B]">
                Technology
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#7C8493]">436 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>

            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB]">
              <Image src="/Cicon6.png" width={48} height={48} alt="Cicon6" />

              <p className="text-lg font-semibold pt-4 text-[#25324B]">Engineering</p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#7C8493]">542 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>

            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB] bg-[#4640DE]">
              <Image src="/Cicon7.png" width={48} height={48} alt="Cicon7" />

              <p className="text-lg font-semibold pt-4 text-[#FFFFFF]">
                Business
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#FFFFFF]">211 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>

            <div className="w-[274px] h-[214px] p-8 border border-[#D6DDEB]">
              <Image src="/Cicon8.png" width={48} height={48} alt="Cicon8" />

              <p className="text-lg font-semibold pt-4 text-[#25324B]">
              Human Resource
              </p>

              <div className="w-[196px] py-6 flex gap-[16px]">
                <p className="text-sm text-[#7C8493]">346 jobs available</p>
                <Image
                  src="/arrowIcon.png"
                  width={24}
                  height={24}
                  alt="arrowIcon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreByCategory;
