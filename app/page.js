import CompanySection from "./components/CompanySection";
import ExploreByCategory from "./components/ExploreByCategory";
import FeaturedJobs from "./components/FeaturedJobs";
import HeroSection from "./components/HeroSection";
import LatestJobsOpen from "./components/LatestJobsOpen";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <CompanySection />

      <ExploreByCategory />

      <FeaturedJobs />

      <LatestJobsOpen />

      
    </div>
  );
}
