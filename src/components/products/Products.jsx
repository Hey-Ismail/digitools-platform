// import React from 'react';
// import SingleCards from "./SingleCards";
import Cards from "./cards";
const Products = ({
  dAta,
  selectedItems,
  setSelectedItems,
  cardCount,
  SetCardCount,
}) => {
  return (
    <div>
      <Cards
        dAta={dAta}
        cardCount={cardCount}
        setCardCount={SetCardCount}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      ></Cards>
    </div>
  );
};

export default Products;
