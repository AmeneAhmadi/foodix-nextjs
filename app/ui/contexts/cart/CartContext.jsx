"use client";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types"; // Added for prop validation
import { cartReducer, initialCartState } from "./CartReducer";

const CartContext = createContext();

const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({ type: "LOAD_CART", payload: storedCart });
    }
  }, []); // Ensure no missing dependencies

  // Memoize derived values for performance optimization
  const totalPrice = useMemo(
    () =>
      cartState.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    [cartState.cartItems]
  );

  const finalPrice = useMemo(
    () => totalPrice + cartState.shippingFee - cartState.discount,
    [totalPrice, cartState.shippingFee, cartState.discount]
  );

  const addProductToCard = (product, amountToBeAdded) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, amountToBeAdded } });
  };
  const addProductToCardWithQuantity = (product, amountToBeAdded) => {
    dispatch({
      type: "ADD_TO_CART_WITH_QUANTITY",
      payload: { product, amountToBeAdded },
    });
  };
  const removeProductFromCard = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: "" });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        totalPrice,
        finalPrice,
        addProductToCard,
        addProductToCardWithQuantity,
        removeProductFromCard,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Add PropTypes for better type checking
CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContextProvider, useCartContext };
