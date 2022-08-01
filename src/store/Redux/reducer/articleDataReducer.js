let initialState = [];

const articleDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLEDATA":
      return action.payload;
    default:
      return state;
  }
};

export default articleDataReducer;
