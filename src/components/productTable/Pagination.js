import React from "react";
import { useProducts } from "../../store/ProductContext";
import styles from "./Pagination.module.css";

export const Pagination = () => {
  const { productsPerPage, totalProducts, paginate } = useProducts();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={styles.nav}>
      <ul>
        {pageNumbers.map((num) => {
          return (
            <li onClick={() => paginate(num)} key={num}>
              {num}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
