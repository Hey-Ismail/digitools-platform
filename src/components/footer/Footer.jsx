import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  //   const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="h-3 bg-[#7b2cf6]" />

      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6 ">
          <div className="max-w-sm md:col-span-2 lg:col-span-2">
            <h2 className="text-[30px] font-extrabold tracking-tight text-white sm:text-[34px]">
              DigiTools
            </h2>
            <p className="mt-4 max-w-xs text-[12px] leading-6 text-white/60 sm:text-[13px]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[13px] font-semibold text-white">Product</h3>
            <ul className="space-y-3 text-[12px] text-white/60">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[13px] font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-[12px] text-white/60">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[13px] font-semibold text-white">Resources</h3>
            <ul className="space-y-3 text-[12px] text-white/60">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-2 lg:col-span-1 lg:justify-self-end">
            <h3 className="text-[13px] font-semibold text-white">
              Social Links
            </h3>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f172a]"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-[14px]" />
              </button>
              <button
                type="button"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f172a]"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-[14px]" />
              </button>
              <button
                type="button"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f172a]"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-[14px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-[12px] text-white/55 lg:flex-row lg:items-center lg:justify-between">
            <p>@ 2026 DigiTools. All rights reserved.</p>

            <div className="flex flex-wrap gap-6 lg:justify-end">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
