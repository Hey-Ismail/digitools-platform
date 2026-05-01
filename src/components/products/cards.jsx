// import React from 'react';
import SingleCards from "./SingleCards";
const cards = ({ dAta, selectedItems, setSelectedItems }) => {
  return (
    <div>
      <div className="container mx-auto grid md:grid-cols-4 gap-4 grid-cols-1">
        {dAta.map((dAta, index) => (
          <SingleCards
            dAta={dAta}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default cards;
