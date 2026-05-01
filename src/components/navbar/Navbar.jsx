// import React from "react";

import { ShoppingCartIcon } from "lucide-react";
import digitool_logo from "../../assets/digitoolsdigitoollogo.png";

const Navbar = ({ cardCount }) => {
  return (
    <div className="mb-9 mt-5 md:mt-7">
      <nav className="flex md:justify-around items-center md:flex-row flex-col ">
        {/* <p className="">Digitools</p> */}
        <img className="h-8 md:mb-0 mb-3" src={digitool_logo} alt="" />
        <div className="">
          <ul className="flex  gap-6 md:flex-row flex-col text-center md:mb-0 mb-3">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full">
            <ShoppingCartIcon className="h-5 w-5" />
            {cardCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9514FA] px-1 text-[10px] font-semibold text-white">
                {cardCount}
              </span>
            ) : null}
          </div>
          <div className="p-0.5 text-[#9514FA] bg-linear-to-b from-[#4F39F6] to-[#9514FA] rounded-md">
            <button className="rounded-md px-5 py-1 bg-white">login</button>
          </div>
          <button className="rounded-md bg-linear-to-b from-[#4F39F6] to-[#9514FA] px-4 py-1.5 text-white">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
