import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <main>
          <div className="text-3xl text-green-400">Home page</div>
      </main>
      
    </div>
  );
}
