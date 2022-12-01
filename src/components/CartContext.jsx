import React, { useState, useEffect, createContext } from "react";

export const contextForCart = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [refreshCart, setRefreshCart] = useState(false);
  const [maxLimitReached, setMaxLimitReached] = useState(false);
  const cartLength = cart.reduce((acc, value) => acc + value.amount, 0);
  const totalPrice = cart.reduce(
    (acc, value) => acc + value.price * value.amount,
    0
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addItem(item, quantity) {
    if (isInCart(item.id)) {
      let previousItemInCart = cart.find((element) => element.id == item.id);
      let previousAmount = previousItemInCart.amount;
      item.amount = previousAmount + quantity;
      if (item.amount <= item.stock) {
        const index = cart.findIndex((el) => el.id === item.id);
        cart[index] = item;
      } else {
        setMaxLimitReached(true);
        setTimeout(() => {
          setMaxLimitReached(false);
        }, 3000);
      }
    } else {
      item.amount = quantity;
      setCart([...cart, item]);
    }
  }
  function removeItem(itemId) {
    const indexFounded = cart.findIndex((el) => {
      return el.id === itemId;
    });
    cart.splice(indexFounded, 1);
    setCart(cart);
    setRefreshCart(!refreshCart);
  }
  function clear() {
    setCart([]);
  }
  function isInCart(id) {
    const result = cart.find((el) => el.id === id);
    const check = cart.includes(result);
    return check;
  }

  return (
    <contextForCart.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
        isInCart,
        cartLength,
        maxLimitReached,
        totalPrice,
      }}
    >
      {children}
    </contextForCart.Provider>
  );
}
