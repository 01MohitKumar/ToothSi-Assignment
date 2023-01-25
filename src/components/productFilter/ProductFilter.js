import React, { useState, useEffect } from "react";
import styles from "./ProductFilter.module.css";
import { IoIosRefresh } from "react-icons/io";

import { useProducts } from "../../store/ProductContext";
import { Link } from "react-router-dom";

export const ProductFilter = ({ filterProducts }) => {
  const { currentProducts, categories, loading } = useProducts();

  const [filters, setFilters] = useState({
    category: "",
    size: "",
    search: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters({ ...filters, [name]: value });
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      size: "",
      search: "",
    });
  };

  useEffect(() => {
    filterProducts(currentProducts);
  }, [loading]);

  useEffect(() => {
    let filteredItems = currentProducts;
    if (filters.category !== "") {
      filteredItems = filteredItems.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.size !== "") {
      filteredItems = filteredItems.filter(
        (product) => product.size === filters.size
      );
    }
    if (filters.search !== "" && filters.search.length > 0) {
      console.log("from filter: Search Term: ", filters.search);
      filteredItems = filteredItems.filter((product) =>
        product.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    filterProducts([...filteredItems]);
  }, [filters]);

  return (
    <section className={styles.container}>
      <form>
        <div className={styles.left}>
          <select
            name="category"
            onChange={handleChange}
            value={filters.category}
          >
            <option value="">Category</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <select name="size" onChange={handleChange} value={filters.size}>
            {/* <option value="">All</option> */}
            <option value="">Size</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="x">X</option>
          </select>
          <button
            className={styles.resetBtn}
            type="button"
            onClick={resetFilters}
          >
            <IoIosRefresh className={styles.icon} />
            Reset
          </button>
        </div>

        <div className={styles.right}>
          <label>
            Search:
            <input
              type="text"
              name="search"
              onChange={handleChange}
              value={filters.search}
            />
          </label>
          <Link to="/cart">
            <button type="button">Add To Cart</button>
          </Link>
        </div>
      </form>
      {console.log("from filter: ", currentProducts, " & ", categories)}
    </section>
  );
};
