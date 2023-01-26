import React from "react";
import ProductForm from "./ProductForm";

export default function ProductItem({ product }) {
  return (
    <tr key={product.id}>
      <td>
        <img src={product.image} alt={product.title} />
      </td>
      <td>{product.title.split(" ").slice(0, 4).join(" ")}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <ProductForm product={product} />
      </td>
    </tr>
  );
}
