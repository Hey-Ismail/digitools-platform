const SelectedCarts = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#F7F8FC] px-4 py-3 sm:px-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_1px_8px_rgba(15,23,42,0.05)]">
          <img
            className="h-6 w-6 object-contain"
            src={item.icon}
            alt={item.name}
          />
        </div>

        <div>
          <p className="text-[14px] font-semibold text-[#101727] sm:text-[15px]">
            {item.name}
          </p>
          <p className="text-[12px] text-[#627382]">
            ${Math.round(item.price)}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="text-[12px] font-semibold text-[#ff4768]"
      >
        Remove
      </button>
    </div>
  );
};

export default SelectedCarts;
