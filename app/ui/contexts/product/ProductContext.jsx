"use client";
import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types"; // Added for prop validation
import { initialProductState, productReducer } from "./ProductReducer";

const ProductContext = createContext();

const useProductContext = () => {
  const productContext = useContext(ProductContext);
  return productContext;
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    ...initialProductState,
    filteredProducts: initialProductState.products, // مقدار اولیه برای نمایش همه محصولات
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Add PropTypes for better type checking
ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductContextProvider, useProductContext };
