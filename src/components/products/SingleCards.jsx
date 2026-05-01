// import React from 'react';

import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const SingleCards = ({ dAta, setSelectedItems }) => {
  const [isSelected, setisSelected] = useState(false);

  const handleBtn = () => {
    setisSelected(true);
    setSelectedItems((prevItems) => {
      const alreadySelected = prevItems.some((item) => item.id === dAta.id);

      if (alreadySelected) {
        return prevItems;
      }

      return [...prevItems, dAta];
    });
    toast.success(`You have added item to the cart`);
  };
  return (
    <div className="border border-[#f2f2f2FF] rounded-2xl p-6">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="border border-[#f2f2f2] w-13  rounded-full p-4 mb-4">
            <img className="" src={dAta.icon} alt="img" />
          </div>
          <span
            className={`rounded-full px-4 py-1.5 text-[14px] font-semibold ${
              dAta.tag === "popular"
                ? "bg-[#e1e7ffFF] text-[#9514FA] "
                : dAta.tag === "new"
                  ? "bg-[#dbfce7FF] text-[#0a883eFF]"
                  : "bg-[#fef3c6FF] text-[#bb4d00FF]"
            }`}
          >
            {dAta.tag}
          </span>
        </div>
        <p className="text-[#101727FF] text-2xl font-bold mb-4">{dAta.name}</p>
        <p className="text-[#627382FF] mb-4">{dAta.description}</p>
      </div>
      <div>
        <p className="mb-4">
          <span className="text-[22px] font-bold text-[#101727FF]">
            ${dAta.price}
          </span>
          /<span className="text-[#627382FF]">{dAta.period}</span>
        </p>
        <ul className=" ">
          {dAta.features.map((feature, index) => (
            <li
              className="flex flex-row gap-1 font-medium  text-[#627382FF] mb-4"
              key={index}
            >
              {" "}
              <Check /> {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleBtn(true)}
          className={`py-4 w-full rounded-full font-bold text-white hover:cursor-pointer ${
            isSelected === true
              ? "border-green-500 bg-green-600 text-white"
              : "bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] "
          }`}
        >
          {isSelected === true ? "Added to the Cart" : "buy now"}
        </button>
      </div>
    </div>
  );
};

export default SingleCards;
