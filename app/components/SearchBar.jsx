
import Image from "next/image";
import SearchBtn from "./SearchBtn";

const SearchBar = () => {
  return (
    <div className="bg-white w-full max-w-[700px] mx-auto lg:mx-0 flex flex-col md:flex-row items-center p-4 gap-4 rounded-md shadow-sm">
      
      <div className="flex items-center gap-2 w-full">
        <Image
          src="/searchIcon.png"
          width={24}
          height={24}
          alt="Search icon"
        />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="w-full outline-none"
        />
      </div>

      <div className="flex items-center gap-2 w-full">
        <Image
          src="/locationIcon.png"
          width={24}
          height={24}
          alt="location icon"
        />
        <input
          type="text"
          placeholder="Florence, Italy"
          className="w-full outline-none"
        />
      </div>

      <div className="w-full md:w-auto">
        <SearchBtn />
      </div>

    </div>
  );
};

export default SearchBar;