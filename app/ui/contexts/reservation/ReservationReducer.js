export const initialState = {
    reservations: [],
  };
  
  export const ReservationReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_RESERVATIONS": {
        return { ...state, reservations: action.payload };
      }
  
      case "ADD_RESERVATION": {
        const updatedReservations= [...state.reservations, action.payload];
        localStorage.setItem(
          "restaurant_reservations",
          JSON.stringify(updatedReservations)
        );
        return { ...state, reservations: updatedReservations };
      }
  
      default:
        return state;
    }
  };