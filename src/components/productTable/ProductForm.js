import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../store/CartContext";

import styles from "./ProductForm.module.css";

export default function ProductForm({ product }) {
  const { addItemToCartHandler } = useCart();
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    const enteredAmount = e.target.value;
    setAmount(enteredAmount);
  };

  return (
    <form className={styles.form}>
      <input
        type="number"
        min="1"
        max="5"
        step="1"
        value={amount}
        onChange={handleAmount}
      />
      <Link to="/cart">
        <BsCart2 className={styles.icon} />
      </Link>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={() => addItemToCartHandler(product, amount)}
      />
    </form>
  );
}
