// import React from 'react';

import { use, useEffect, useState } from "react";
// import SingleCards from "./SingleCards";
import Products from "./Products";
import Carts from "./Carts";

function ProductCards({ data, setCardCount }) {
  const [toogleBtnType, setToogleBtnType] = useState("Products");

  const [selectedItems, setSelectedItems] = useState([]);
  const dAta = use(data);
  useEffect(() => {
    setCardCount(selectedItems.length);
  }, [selectedItems, setCardCount]);
  // console.log(dAta);
  // const toggleBtn = (setToggle) => {};
  return (
    <div>
      <div className="mt-30 flex justify-center items-center flex-col text-center">
        <p className="text-[#101727FF] text-5xl font-extrabold mb-4">
          Premium Digital Tools
        </p>
        <p className="text-[#627382FF] mb-4">
          Choose from our curated collection of premium digital <br />
          products designed to boost your productivity and creativity.
        </p>
        <div className="mb-10 flex gap-2.5">
          <button
            onClick={() => setToogleBtnType("Products")}
            className={`rounded-full font-bold py-3.5 px-6 ${toogleBtnType === "Products" ? "bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] text-white" : "py-3.5 px-8"}`}
          >
            Products
          </button>
          <button
            onClick={() => setToogleBtnType("Carts")}
            className={`rounded-full font-bold py-3.5 px-6 ${toogleBtnType === "Carts" ? "bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] text-white" : "py-3.5 px-8"}`}
          >
            Carts ({selectedItems.length})
          </button>
        </div>
      </div>

      {toogleBtnType === "Products" ? (
        <Products
          dAta={dAta}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        ></Products>
      ) : (
        <Carts
          data={dAta}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        ></Carts>
      )}
    </div>
  );
}

export default ProductCards;
