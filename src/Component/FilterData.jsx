import React from "react";

const FilterData = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Random Dog"
          className="mx-auto w-64 h-64 object-cover rounded-lg shadow"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FilterData;
