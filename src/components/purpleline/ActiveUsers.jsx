// import React from 'react';

const ActiveUsers = () => {
  return (
    <div className="mt-21.25">
      <div className=" flex justify-around flex-col md:flex-row gap-8 md:gap-0 items-center bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] p-10 ">
        <div className="flex flex-col items-center justify-between  ">
          <p className="text-6xl font-semibold text-[#ffffffFF]">50K+</p>
          <p className="text-[#ffffffFF] text-2xl font-medium">Active Users</p>
        </div>
        <div className="flex flex-col items-center justify-between border border-r-white border-l-white  w-150 border-t-0 border-b-0">
          <p className="text-6xl font-semibold text-[#ffffffFF]">200+</p>
          <p className="text-[#ffffffFF] text-2xl font-medium">Premium Tools</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="text-6xl font-semibold text-[#ffffffFF]">4.9</p>
          <p className="text-[#ffffffFF] text-2xl font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
