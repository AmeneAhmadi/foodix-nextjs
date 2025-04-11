export const initialContactState = {
  messages: [],
};

export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_MESSAGES": {
      return { ...state, messages: action.payload };
    }

    case "ADD_MESSAGE": {
      const updatedMessages = [...state.messages, action.payload];
      localStorage.setItem(
        "restaurant_messages",
        JSON.stringify(updatedMessages)
      );
      return { ...state, messages: updatedMessages };
    }

    default:
      return state;
  }
};
