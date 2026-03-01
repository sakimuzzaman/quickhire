import Image from "next/image";

const FooterSection = () => {
  return (
    // <div className="bg-[#202430] w-[1440px] h-[497px]">
    
    // </div>

    <footer className="footer bg-[#202430] sm:footer-horizontal  text-base-content p-10">
  <nav>
     <Image src="/logo.png" alt="navbar logo" width={40} height={40} />
     <span className="text-2xl text-[#FFFFFF] font-semibold">QuickHire</span>
      
     <p className="text-[#FFFFFF]">
     Great platform for the job seeker that <br /> passionate about startups. Find your dream job <br />
      easier.
     </p>

  </nav>
  <nav>
    <h6 className="footer-title text-[#FFFFFF]">About</h6>
    <a className="link link-hover text-[#FFFFFF]">Companies</a>
    <a className="link link-hover text-[#FFFFFF]">Pricing</a>
    <a className="link link-hover text-[#FFFFFF]">Terms</a>
    <a className="link link-hover text-[#FFFFFF]">Advice</a>
    <a className="link link-hover text-[#FFFFFF]">Privacy Policy</a>
  </nav>
  <nav>
    <h6 className="footer-title text-[#FFFFFF]">Resources</h6>
    <a className="link link-hover text-[#FFFFFF]">Help Docs</a>
    <a className="link link-hover text-[#FFFFFF]">Guide</a>
    <a className="link link-hover text-[#FFFFFF]">Contact Us</a>
  </nav>
  <form>
    <h6 className="footer-title text-[#FFFFFF]">Get job notifications</h6>
    <fieldset className="w-80">
      <label className="text-[#FFFFFF]">The latest job news, articles, sent to your inbox weekly.</label>
      <div className="join">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    
  );
};

export default FooterSection;
