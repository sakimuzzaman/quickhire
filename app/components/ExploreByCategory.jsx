import Image from "next/image";

const ExploreByCategory = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">
            Explore by <span className="text-[#26A4FF]">category</span>
          </p>

          <div className="flex items-center gap-3 cursor-pointer">
            <p className="text-[#4640DE] font-semibold text-sm md:text-base">
              Show all jobs
            </p>
            <Image
              src="/arrowIcon.png"
              width={20}
              height={20}
              alt="arrowIcon"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {[
            { title: "Design", jobs: "235 jobs available", icon: "/Cicon1.png" },
            { title: "Sales", jobs: "756 jobs available", icon: "/Cicon2.png" },
            { title: "Marketing", jobs: "140 jobs available", icon: "/Cicon3.png", active: true },
            { title: "Finance", jobs: "325 jobs available", icon: "/Cicon4.png" },
            { title: "Technology", jobs: "436 jobs available", icon: "/Cicon5.png" },
            { title: "Engineering", jobs: "542 jobs available", icon: "/Cicon6.png" },
            { title: "Business", jobs: "211 jobs available", icon: "/Cicon7.png" },
            { title: "Human Resource", jobs: "346 jobs available", icon: "/Cicon8.png" },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-8 border rounded-md transition duration-300 hover:shadow-lg cursor-pointer ${
                item.active
                  ? "bg-[#4640DE] text-white border-transparent"
                  : "border-[#D6DDEB] bg-white"
              }`}
            >
              <Image
                src={item.icon}
                width={48}
                height={48}
                alt={item.title}
              />

              <p className="text-lg font-semibold pt-4">
                {item.title}
              </p>

              <div className="flex items-center justify-between pt-6">
                <p
                  className={`text-sm ${
                    item.active ? "text-white" : "text-[#7C8493]"
                  }`}
                >
                  {item.jobs}
                </p>
                <Image
                  src="/arrowIcon.png"
                  width={20}
                  height={20}
                  alt="arrowIcon"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ExploreByCategory;
