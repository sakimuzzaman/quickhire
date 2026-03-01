import Image from "next/image";

const jobs = [
  {
    title: "Email Marketing",
    company: "Revolt",
    location: "Madrid, Spain",
    desc: "Revolut is looking for Email Marketing to help team",
    icon: "/Cicon9.jpg",
    tags: ["Marketing", "Design"],
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco",
    desc: "Dropbox is looking for Designer to help the team",
    icon: "/Cicon10.png",
    tags: ["Marketing", "Business"],
  },
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    desc: "Pitch is looking for Manager to join marketing",
    icon: "/Cicon11.png",
    tags: ["Marketing"],
  },
  {
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    desc: "Blinkist is looking for Designer to help team",
    icon: "/Cicon12.png",
    tags: ["Design"],
  },
  {
    title: "Product Designer",
    company: "Revolt",
    location: "Madrid, Spain",
    desc: "Revolut is looking for Product Designer",
    icon: "/Cicon13.png",
    tags: ["Marketing", "Design"],
  },
  {
    title: "Lead Designer",
    company: "Dropbox",
    location: "San Francisco",
    desc: "Dropbox is looking for Lead Designer",
    icon: "/Cicon14.png",
    tags: ["Marketing", "Business"],
  },
  {
    title: "Brand Strategist",
    company: "Pitch",
    location: "Berlin, Germany",
    desc: "Pitch is looking for Brand Strategist",
    icon: "/Cicon15.png",
    tags: ["Marketing"],
  },
  {
    title: "Data Analyst",
    company: "Blinklist",
    location: "Granada, Spain",
    desc: "Blinkist is looking for Data Analyst",
    icon: "/Cicon16.png",
    tags: ["Design"],
  },
];

const FeaturedJobs = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">
            Featured <span className="text-[#26A4FF]">jobs</span>
          </p>

          <div className="flex items-center gap-3 cursor-pointer">
            <p className="text-[#4640DE] font-semibold text-sm md:text-base">
              Show all jobs
            </p>
            <Image src="/arrowIcon.png" width={20} height={20} alt="arrowIcon" />
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 border rounded-md hover:shadow-lg transition duration-300 bg-white"
            >
              {/* Top */}
              <div className="flex justify-between items-center">
                <Image src={job.icon} width={48} height={48} alt={job.title} />
                <span className="border border-[#4640DE] text-sm px-3 py-1">
                  Full Time
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mt-4 text-[#25324B]">
                {job.title}
              </h3>

              {/* Company + Location */}
              <div className="flex justify-between text-sm text-[#515B6F] mt-2">
                <span>{job.company}</span>
                <span>{job.location}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#7C8493] mt-4">
                {job.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturedJobs;
