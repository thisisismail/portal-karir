let initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      // stop as the state is less than zero
      // if (state < 1) {
      //   return state;
      // }
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
