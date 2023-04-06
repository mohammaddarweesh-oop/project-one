import React from "react";

const ShapeOne = ({ item }) => {
  return (
    <div className="shapeOne shape">
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default ShapeOne;
