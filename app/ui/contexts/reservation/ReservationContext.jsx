"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types"; // Added for prop validation
import Reservation from "@/app/reservation/page";
import { initialState, ReservationReducer } from "./ReservationReducer";

const ReservationContext = createContext();

const useReservationContext = () => {
  const reservationContext = useContext(ReservationContext);
  return reservationContext;
};

const ReservationContextProvider = ({ children }) => {
  const [reservationState, dispatch] = useReducer(
    ReservationReducer,
    initialState
  );

  useEffect(() => {
    const stored = localStorage.getItem("restaurant_reservations");
    if (stored) {
      dispatch({
        type: "LOAD_RESERVATIONS",
        payload: JSON.parse(stored),
      });
    }
  }, []);

  const bookingTable = (formData) => {
    dispatch({ type: "ADD_RESERVATION", payload: formData });
  };
console.log(reservationState);

  return (
    <ReservationContext.Provider
      value={{
        reservationState,
        bookingTable,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

// Add PropTypes for better type checking
ReservationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ReservationContextProvider, useReservationContext };
