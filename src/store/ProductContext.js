import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

const api = "https://fakestoreapi.com/products";
const ProductContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [categories, setCategories] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const foundCategories = () => {
    const foundCategories = new Set();
    products.forEach((product) => {
      if (!foundCategories.has(product.category))
        foundCategories.add(product.category);
    });
    return Array.from(foundCategories);
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    const res = await axios.get(api);
    console.log("from context", res.data);
    setProducts(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCategories(foundCategories);
  }, [loading]);

  // Get Current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductContext.Provider
      value={{
        currentProducts,
        loading,
        productsPerPage,
        totalProducts: products.length,
        paginate,
        categories,
        setFilteredProducts,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
