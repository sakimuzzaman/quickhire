import Image from "next/image";

const FooterSection = () => {

    const socials = [
        { id: 1, href: "https://facebook.com", icon: "/facebook.png", alt: "Facebook" },
        { id: 2, href: "https://facebook.com", icon: "/Dribbble.png", alt: "Dribbble" },
        { id: 3, href: "https://twitter.com", icon: "/twitter.png", alt: "Twitter" },
        { id: 4, href: "https://instagram.com", icon: "/instagram.png", alt: "Instagram" },
        { id: 5, href: "https://linkedin.com", icon: "/linkedin.png", alt: "LinkedIn" },
      ];
    
  return (
    

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

  <hr />

  <div>
     
     <p>2021 @ QuickHire. All rights reserved.</p>
     <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
        
    {socials.map((social) => (
    <a
      key={social.id}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 hover:bg-gray-500 transition"
    >
      <Image
        src={social.icon}
        alt={social.alt}
        width={18}
        height={18}
      />
    </a>
  ))}

    </div>
  </nav>
  </div>

</footer>


    
  );
};

export default FooterSection;
