import React from "react";

const ShapeTwo = ({ item }) => {
  return (
    <div className="shapeTwo shape">
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default ShapeTwo;
