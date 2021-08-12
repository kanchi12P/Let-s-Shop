import React from "react";

export default function Product(props) {
  const { filteredproduct, onAdd } = props;

  return (
    <div className="item">
      <img
        className="image"
        src={filteredproduct.image}
        alt={filteredproduct.name}
      ></img>
      <h3 className="name">{filteredproduct.name}</h3>
      <div className="price">Rs.{filteredproduct.price}</div>
      <div>
        <button
          className="btn btn-white btn-animate"
          onClick={() => onAdd(filteredproduct)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
