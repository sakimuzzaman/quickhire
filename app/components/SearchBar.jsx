import Image from "next/image";
import SearchBtn from "./SearchBtn";


const SearchBar = () => {
    return (
        <div className="bg-[#FFFFFF]  w-[700px] flex p-[16px] gap-[16px] ">
            
           
                <Image 
                    src="/searchIcon.png"
                    width={24}
                    height={24}
                    alt="Search icon"
                />
                <input type="text" placeholder="Job title or keyword" />

                <Image 
                    src="/locationIcon.png"
                    width={24}
                    height={24}
                    alt="location icon"
                />
                <input type="text" placeholder="Florence, Italy" />
                
                <SearchBtn />
            

        </div>
    );
};

export default SearchBar;