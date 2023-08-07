const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "CLR":
      return { count: 0 };

    default:
      return state;
  }
};
