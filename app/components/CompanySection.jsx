import Image from "next/image";

const CompanySection = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12">

        {/* Title */}
        <p className="text-gray-400 text-sm md:text-base mb-8 text-center md:text-left">
          Companies we helped grow
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          <Image
            src="/companyImgone.png"
            width={154}
            height={40}
            alt="companyImgone"
            className="h-auto w-[120px] md:w-[140px] lg:w-[154px]"
          />
          <Image
            src="/companyImgtwo.png"
            width={154}
            height={40}
            alt="companyImgtwo"
            className="h-auto w-[120px] md:w-[140px] lg:w-[154px]"
          />
          <Image
            src="/companyImgthree.png"
            width={154}
            height={40}
            alt="companyImgthree"
            className="h-auto w-[120px] md:w-[140px] lg:w-[154px]"
          />
          <Image
            src="/companyImgfour.png"
            width={154}
            height={40}
            alt="companyImgfour"
            className="h-auto w-[120px] md:w-[140px] lg:w-[154px]"
          />
          <Image
            src="/companyImgfive.png"
            width={154}
            height={40}
            alt="companyImgfive"
            className="h-auto w-[120px] md:w-[140px] lg:w-[154px]"
          />
        </div>

      </div>
    </div>
  );
};

export default CompanySection;