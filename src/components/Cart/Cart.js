import React from "react";
import styles from "./Cart.module.css";
import CartSummary from "./CartSummary";
import { CartItems } from "./CartItems";

export const Cart = () => {
  return (
    <section className={styles.container}>
      <CartItems />
      <CartSummary />
    </section>
  );
};
