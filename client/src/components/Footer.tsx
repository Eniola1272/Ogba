import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img
            src={assets.logo}
            alt="logo"
            className="mb-4 h-8 md:h-9 invert opacity-80"
          />
          <p className="text-sm">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <img
              src={assets.instagramIcon}
              alt="instagram-icon"
              className="w-6"
            />
            {/* Facebook */}
            <img
              src={assets.facebookIcon}
              alt="facebook-icon"
              className="w-6"
            />
            {/* Twitter */}
            <img src={assets.twitterIcon} alt="twitter-icon" className="w-6" />
            {/* LinkedIn */}
            <img
              src={assets.linkendinIcon}
              alt="linkedin-icon"
              className="w-6"
            />
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800 font-playfair">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/press">Press</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/partners">Partners</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800 font-playfair">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="/help">Help Center</a>
            </li>
            <li>
              <a href="/safety">Safety Information</a>
            </li>
            <li>
              <a href="/cancel">Cancellation Options</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/access">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-lg text-gray-800 font-playfair">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
              {/* Arrow icon */}
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="w-3.5 invert"
              />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="/privacy">Privacy</a>
          </li>
          <li>
            <a href="/terms">Terms</a>
          </li>
          <li>
            <a href="/site">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
