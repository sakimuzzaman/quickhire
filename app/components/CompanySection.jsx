import Image from "next/image";


const CompanySection = () => {
    return (
        <div className="w-[1440px] h-[197px] py-[48px] pl-[124px] pr-[122px] pb-[48px]">

            <div className="pb-4">
                 <p className="text-normal text-gray-400">Companies we helped grow</p>
            </div>

            <div className="flex justify-between">

            <Image 
                src="/companyImgone.png"
                width={154}
                height={40}
                alt="companyImgone"
            />
            <Image 
                src="/companyImgtwo.png"
                width={154}
                height={40}
                alt="companyImgtwo"
            />
            <Image 
                src="/companyImgthree.png"
                width={154}
                height={40}
                alt="companyImgthree"
            />
            <Image 
                src="/companyImgfour.png"
                width={154}
                height={40}
                alt="companyImgfour"
            />
            <Image 
                src="/companyImgfive.png"
                width={154}
                height={40}
                alt="companyImgfive"
            />
            </div>

            
        </div>
    );
};

export default CompanySection;