import React from "react";
import { useCart } from "../../store/CartContext";
import styles from "./CartItems.module.css";

export const CartItems = () => {
  const {
    cartItems,
    deleteItemFromCart,
    addItemToCartHandler,
    removeItemToCartHandler,
  } = useCart();

  const content =
    cartItems.length === 0 ? (
      <p className={styles.msg}>Your Cart Is Empty</p>
    ) : (
      <table className={styles.productsTable}>
        <thead>
          <tr>
            <th colSpan="2">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => {
            return (
              <tr key={product.id}>
                <td className={styles.product}>
                  <div>
                    <button
                      onClick={() => {
                        deleteItemFromCart(product.id);
                      }}
                    >
                      x
                    </button>
                    <img src={product.image} alt={product.title} />
                  </div>
                </td>
                <td>{product.title.split(" ").slice(0, 4).join(" ")}</td>
                <td>{product.price}</td>
                <td className={styles.actions}>
                  <div>
                    <button onClick={() => removeItemToCartHandler(product.id)}>
                      -
                    </button>
                    <p>{product.amount}</p>
                    <button onClick={() => addItemToCartHandler(product, 1)}>
                      +
                    </button>
                  </div>
                </td>
                <td>{product.subTotal.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );

  return <section className={styles.container}>{content}</section>;
};
