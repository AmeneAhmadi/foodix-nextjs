// مقدار اولیه سبد خرید
export const initialCartState = {
  cartItems: [],
  shippingFee: 50, // delivery cost
  discount: 0, // discount
};

// اکشن‌ها
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, amountToBeAdded } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.max(item.quantity + amountToBeAdded, 1), //avoid negative quantity
              }
            : item
        ).filter((item) => item.quantity > 0); // remove items with quantity 0
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cartItems: updatedCart };
    }
    case "ADD_TO_CART_WITH_QUANTITY": {
      const { product, amountToBeAdded } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: amountToBeAdded, 
              }
            : item
        ).filter((item) => item.quantity > 0); // remove items with quantity 0
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: amountToBeAdded }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cartItems: updatedCart };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cartItems: updatedCart };
    }

    case "APPLY_COUPON": {
      return { ...state, discount: action.payload };
    }

    case "LOAD_CART": {
      return { ...state, cartItems: action.payload };
    }

    case "CLEAR_CART": {
      localStorage.removeItem("cart");
      return { ...state, cartItems: [], discount: 0 };
    }

    default:
      return state;
  }
};
