import React, { useCallback, useEffect, useState } from "react";
import { useProducts } from "../../store/ProductContext";
import Loading from "./Loading";
import { ProductFilter } from "../productFilter/ProductFilter";
import { Pagination } from "./Pagination";
import ProductItem from "./ProductItem";
import { FaSort } from "react-icons/fa";

import styles from "./ProductTable.module.css";

let sortPriceAscending = true;
let sortCategoryAscending = true;

export const ProductTable = () => {
  const { currentProducts, loading } = useProducts();
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    setSortedProducts(currentProducts);
  }, [loading, currentProducts]);

  // Filtered Product

  const handleFilterProducts = useCallback((products) => {
    setSortedProducts(products);
  }, []);

  // Sorting Product

  const handleCategorySort = () => {
    const sortedList = sortCategoryAscending
      ? sortedProducts.sort((a, b) => (a.category < b.category ? -1 : 0))
      : sortedProducts.sort((a, b) => (a.category < b.category ? 0 : -1));
    sortCategoryAscending = !sortCategoryAscending;
    setSortedProducts([...sortedList]);
  };

  const handlePriceSort = () => {
    const sortedList = sortPriceAscending
      ? sortedProducts.sort((a, b) => a.price - b.price)
      : sortedProducts.sort((a, b) => b.price - a.price);
    sortPriceAscending = !sortPriceAscending;
    setSortedProducts([...sortedList]);
  };

  const content = loading ? (
    <Loading classes={styles.loading} />
  ) : sortedProducts.length === 0 ? (
    <p>There is no product with current filter please reset.</p>
  ) : (
    <table className={styles.productsTable}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th className={styles.sort} onClick={handleCategorySort}>
            Category <FaSort />
          </th>
          <th className={styles.sort} onClick={handlePriceSort}>
            Price <FaSort />
          </th>
          {/* <th>Stock</th> */}
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <ProductFilter filterProducts={handleFilterProducts} />
      <section className={styles.container}>{content}</section>
      {sortedProducts.length > 0 && <Pagination />}
    </>
  );
};
