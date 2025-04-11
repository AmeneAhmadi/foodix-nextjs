"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { orderReducer, initialOrderState } from "./OrderReducer";
import { useCartContext } from "../cart/CartContext";

const OrderContext = createContext();

const useOrderContext = () => {
  const orderContext = useContext(OrderContext);
  return orderContext;
};

const OrderContextProvider = ({ children }) => {
  const [orderState, dispatch] = useReducer(orderReducer, initialOrderState);
  const { cartState, clearCart } = useCartContext();

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("currentOrder"));
    if (storedOrder) {
      dispatch({ type: "LOAD_ORDER", payload: storedOrder });
    }
  }, []);

  const submitOrder = (formData) => {
    const orderId = Date.now().toString();
    dispatch({
      type: "SUBMIT_ORDER",
      payload: {
        orderDetails: formData,
        items: cartState.cartItems,
        orderId,
      },
    });
    clearCart();
  };

  const clearOrder = () => {
    dispatch({ type: "CLEAR_ORDER" });
  };

  return (
    <OrderContext.Provider
      value={{
        orderDetails: orderState.orderDetails,
        orderItems: orderState.orderItems,
        orderId: orderState.orderId,
        submitOrder,
        clearOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

OrderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { OrderContextProvider, useOrderContext };