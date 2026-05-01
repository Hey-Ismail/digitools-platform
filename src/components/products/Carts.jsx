// import React from 'react';

import { Slide, toast } from "react-toastify";
import SelectedCarts from "./SelectedCarts";

const Carts = ({ selectedItems, setSelectedItems }) => {
  const totalAmount = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (itemId) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId),
    );
    toast("You have removed the item", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-0">
      <div className="rounded-2xl border border-[#E8EBF3] bg-white px-5 py-6 shadow-[0_1px_18px_rgba(15,23,42,0.05)] sm:px-6">
        <h3 className="text-[20px] font-semibold text-[#101727]">Your Cart</h3>

        {selectedItems.length === 0 ? (
          <div className="mt-5 rounded-2xl bg-[#F7F8FC] px-4 py-6 text-center text-[13px] text-[#627382]">
            No cards have been selected.
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            {selectedItems.map((item) => (
              <SelectedCarts
                key={item.id}
                item={item}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <p className="text-[12px] text-[#627382]">Total:</p>
          <p className="text-[20px] font-bold text-[#101727]">
            ${Math.round(totalAmount)}
          </p>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-full bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] py-3.5 text-[12px] font-semibold text-white"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Carts;
