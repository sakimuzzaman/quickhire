import Image from "next/image";

const LatestJobsOpen = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-[124px] bg-[#F8F8FD]">
        {/* Header Row */}
        <div className="flex py-12 justify-between items-center">
          <p className="font-semibold text-5xl">
            Latest <span className="text-[#26A4FF]">jobs open</span>
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

        <div className="flex gap-8">
          {/* Left Column */}
          <div className="w-[580px] h-[644px]  flex flex-col gap-4">

            <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/ljobs1.png" width={48} height={57} alt="ljobs1" />
              </div>
              <div>
                <p className="font-semibold text-xl">Social Media Assistant</p>
                <span className="text-[#515B6F]">Nomad Paris, France</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/Cicon10.png" width={48} height={57} alt="Cicon10" />
              </div>
              <div>
                <p className="font-semibold text-xl">Brand Designer</p>
                <span className="text-[#515B6F]">Dropbox, San Fransisco, USA</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/ljobs2.png" width={48} height={57} alt="ljobs2" />
              </div>
              <div>
                <p className="font-semibold text-xl">Interactive Developer</p>
                <span className="text-[#515B6F]">Terraform, Hamburg, Germany</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/ljobs3.png" width={48} height={57} alt="ljobs3" />
              </div>
              <div>
                <p className="font-semibold text-xl">HR Manager</p>
                <span className="text-[#515B6F]">Packer, Lucern, Switzerland</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="w-[580px] h-[644px] flex flex-col gap-4">

          <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/ljobs4.png" width={48} height={57} alt="ljobs4" />
              </div>
              <div>
                <p className="font-semibold text-xl">Social Media Assistant</p>
                <span className="text-[#515B6F]">Netlify, Paris, France</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/ljobs5.png" width={48} height={57} alt="ljobs5" />
              </div>
              <div>
                <p className="font-semibold text-xl">Brand Designer</p>
                <span className="text-[#515B6F]">Maze, San Fransisco, USA</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/ljobs6.png" width={48} height={57} alt="ljobs6" />
              </div>
              <div>
                <p className="font-semibold text-xl">Interactive Developer</p>
                <span className="text-[#515B6F]">Packer, Lucern, Switzerland</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8 w-[580px] h-[149px] bg-white py-[24px] px-[40px]">
              <div className="">
                <Image src="/ljobs7.png" width={48} height={57} alt="ljobs7" />
              </div>
              <div>
                <p className="font-semibold text-xl">HR Manager</p>
                <span className="text-[#515B6F]">Webflow, Lucern, Switzerland</span>

                <div className="flex gap-4 py-2 ">
                  <span className="inline-flex items-center px-3 py-1 bg-[#56CDAD1A] rounded-3xl text-[#56CDAD] font-semibold">
                    Full Time
                  </span>
                  <span className="inline-flex items-center px-3 py-1  border border-[#FFB836] rounded-3xl text-[#FFB836] font-semibold">
                    Marketing
                  </span>
                  <span className="inline-flex items-center px-3 py-1 border border-[#4640DE]  rounded-3xl text-[#4640DE] font-semibold">
                    Design
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LatestJobsOpen;
