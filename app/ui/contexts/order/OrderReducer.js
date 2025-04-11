export const initialOrderState = {
  orderDetails: {
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    apartment:"",
    city: "",
    country:"",
    postCode:"",
    email: "",
    phone: "",
    additionalNotes: "",
    paymentMethod: "cash",
  },
  orderItems: [],
  orderId: null,
};

export const orderReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_ORDER": {
      const { orderDetails, items, orderId } = action.payload;
      const updatedState = {
        ...state,
        orderDetails,
        orderItems: items,
        orderId,
      };
      localStorage.setItem("currentOrder", JSON.stringify(updatedState));
      return updatedState;
    }
    case "CLEAR_ORDER": {
      localStorage.removeItem("currentOrder");
      return initialOrderState;
    }
    case "LOAD_ORDER": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
