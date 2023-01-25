import React from "react";
import ProductForm from "./ProductForm";

export default function ProductItem({ product }) {
  return (
    <tr key={product.id}>
      {/* {console.log("pi: ", product)} */}
      <td>
        <img src={product.image} />
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
