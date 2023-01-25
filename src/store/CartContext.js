import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //   const [grandTotal, setGrandTotal] = useState(0);

  const addItemToCartHandler = (item, enteredAmount) => {
    console.log("I got run!: ", item, enteredAmount);
    let newItemList = cartItems;
    const foundIdx = newItemList.findIndex((product) => product.id === item.id);
    console.log("from cart context: ", foundIdx);
    if (foundIdx !== -1) {
      const foundItem = cartItems[foundIdx];
      foundItem.amount = foundItem.amount + Number(enteredAmount);
      foundItem.subTotal = foundItem.amount * foundItem.price;
      setCartItems([...cartItems]);
    } else {
      item.amount = enteredAmount;
      const subTotal = item.price * item.amount;
      item.subTotal = subTotal;
      setCartItems([...cartItems, item]);
    }
    // const total = cartItems.reduce((acc, item) => acc + item.subTotal, 0);
    // setGrandTotal(total);
    console.log("from cart context Grandtotal: ", cartItems);
  };

  const removeItemToCartHandler = (productId) => {
    const foundIdx = cartItems.findIndex((product) => product.id === productId);
    const foundItem = cartItems[foundIdx];
    foundItem.amount--;
    if (foundItem.amount <= 0) {
      const newCartItems = cartItems.filter((item) => item.id !== productId);
      setCartItems([...newCartItems]);
    } else {
      foundItem.subTotal = foundItem.amount * foundItem.price;
      setCartItems([...cartItems]);
    }
  };

  const deleteItemFromCart = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems([...newCartItems]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCartHandler,
        removeItemToCartHandler,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
