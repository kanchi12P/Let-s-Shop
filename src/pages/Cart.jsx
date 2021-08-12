import React from "react";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div>
      <h1 className="name padding3">My Cart</h1>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <button className="glow-on-hover" onClick={() => onAdd(item)}>
              +
            </button>
            <button className="glow-on-hover" onClick={() => onRemove(item)}>
              -
            </button>
          </div>
          <div>
            {item.qty}x Rs.{item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div>
          <hr></hr>
          <div>
            <strong>Total Price</strong>{" "}
          </div>
          <div>Rs.{itemsPrice.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}
export default Cart;
