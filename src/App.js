import { Cart } from "./components/Cart/Cart";
import { ProductTable } from "./components/productTable/ProductTable";
import { ProductProvider } from "./store/ProductContext";
import { Route, Routes } from "react-router-dom";
import { ThanksPage } from "./components/ThanksPage/ThanksPage";
import { CartProvider } from "./store/CartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Routes>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
