"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types"; // Added for prop validation
import { ContactReducer, initialContactState } from "./ContactReducer";

const ContactContext = createContext();

const useContactContext = () => {
  const contactContext = useContext(ContactContext);
  return contactContext;
};

const ContactContextProvider = ({ children }) => {
  const [contactState, dispatch] = useReducer(ContactReducer, initialContactState);

  useEffect(() => {
    const stored = localStorage.getItem("restaurant_messages");
    if (stored) {
      dispatch({
        type: "LOAD_MESSAGES",
        payload: JSON.parse(stored),
      });
    }
  }, []);

  const sendMessage = (formData) => {
    dispatch({ type: "ADD_MESSAGE", payload: formData });
  };

  return (
    <ContactContext.Provider
      value={{
        contactState,
        sendMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

// Add PropTypes for better type checking
ContactContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContactContextProvider, useContactContext };
