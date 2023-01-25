import React from "react";
import { Link } from "react-router-dom";
import styles from "./ThanksPage.module.css";

export const ThanksPage = () => {
  return (
    <section className={styles.container}>
      <Link to="/">
        <h1>Thanks for shopping with us</h1>
      </Link>
    </section>
  );
};
