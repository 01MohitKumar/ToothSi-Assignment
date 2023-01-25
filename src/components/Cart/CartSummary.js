import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../store/CartContext";
import styles from "./CartSummary.module.css";

export default function CartSummary() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.subTotal, 0);
  return (
    <section className={styles.card}>
      <h1>Cart totals</h1>
      <div className={styles.amounts}>
        <ul className={styles.pair}>
          <li>Subtotal</li>
          <li>${total.toFixed(2)}</li>
        </ul>
      </div>
      <hr />
      <div className={styles.total}>
        <ul className={styles.pair}>
          <li>Total</li>
          <li>${total.toFixed(2)}</li>
        </ul>
      </div>
      <Link to="/thanks">
        <button className={styles.ctaBtn}>Proceed to Checkout</button>
      </Link>
      <Link to="/">
        <button className={`${styles.ctaBtn} ${styles.returnBtn}`}>
          Go back to shopping
        </button>
      </Link>
    </section>
  );
}
