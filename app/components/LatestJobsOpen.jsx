import Image from "next/image";

const jobs = [
  {
    id: 1,
    img: "/ljobs1.png",
    title: "Social Media Assistant",
    company: "Nomad Paris, France",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 2,
    img: "/Cicon10.png",
    title: "Brand Designer",
    company: "Dropbox, San Fransisco, USA",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 3,
    img: "/ljobs2.png",
    title: "Interactive Developer",
    company: "Terraform, Hamburg, Germany",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 4,
    img: "/ljobs3.png",
    title: "HR Manager",
    company: "Packer, Lucern, Switzerland",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 5,
    img: "/ljobs4.png",
    title: "Social Media Assistant",
    company: "Netlify, Paris, France",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 6,
    img: "/ljobs5.png",
    title: "Brand Designer",
    company: "Maze, San Fransisco, USA",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 7,
    img: "/ljobs6.png",
    title: "Interactive Developer",
    company: "Packer, Lucern, Switzerland",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 8,
    img: "/ljobs7.png",
    title: "HR Manager",
    company: "Webflow, Lucern, Switzerland",
    tags: ["Full Time", "Marketing", "Design"],
  },
];

const LatestJobsOpen = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 bg-[#F8F8FD]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 py-12">
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
          Latest <span className="text-[#26A4FF]">jobs open</span>
        </h2>

        <div className="flex items-center gap-3 cursor-pointer">
          <p className="text-[#4640DE] font-semibold text-sm sm:text-base">
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

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex gap-4 bg-white p-6 rounded-xl hover:shadow-md transition"
          >
            <Image
              src={job.img}
              width={48}
              height={48}
              alt={job.title}
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg sm:text-xl">
                {job.title}
              </h3>
              <p className="text-[#515B6F] text-sm sm:text-base">
                {job.company}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pt-3">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      tag === "Full Time"
                        ? "bg-[#56CDAD1A] text-[#56CDAD]"
                        : tag === "Marketing"
                        ? "border border-[#FFB836] text-[#FFB836]"
                        : "border border-[#4640DE] text-[#4640DE]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestJobsOpen;