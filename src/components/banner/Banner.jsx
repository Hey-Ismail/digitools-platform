// import React from "react";
import playImg from "../../assets/Play.png";
import banner from "../../assets/banner.png";
import badge from "../../assets/group-5badge.png";
const Banner = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid  md:grid-cols-2 grid-cols-1">
          <div className="left-container mt-44 ">
            <div className=" bg-[#e1e7ffFF] flex  items-center gap-1.5 w-68 rounded-full px-1 py-1.5  mb-6 mx-auto md:mx-0">
              <img src={badge} alt="" />
              <p className="bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] bg-clip-text text-transparent font-medium text-[16px]">
                New: AI-Powered Tools Available
              </p>
            </div>
            <p className="text-[#101727FF] md:text-[72px] text-4xl font-extrabold mb-4  text-center md:text-left">
              Supercharge Your <br />
              <span className="bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] bg-clip-text text-transparent">
                Digital
              </span>{" "}
              Workflow
            </p>
            <p className="text-[#627382FF] text-[18px] font-normal mb-8 text-center md:text-left">
              Access premium AI tools, design assets, templates, and <br />
              productivity software—all in one place. Start creating faster{" "}
              <br />
              today. Explore Products
            </p>
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <button className="bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] p-4 rounded-full text-white text-[16px] font-bold">
                Explore Product
              </button>
              <div className="bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] p-0.5 rounded-full">
                <div className="flex bg-white p-4 rounded-full items-center gap-2">
                  <img src={playImg} alt="" />
                  <button className="font-bold text-[16px] text-[bg-gradient-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] bg-clip-text text-transparent]">
                    watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container mt-21.25 md:flex md:items-center md:justify-center ">
            <img className=" " src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
