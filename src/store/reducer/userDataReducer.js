let initialState = [];

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERDATA":
      return action.payload;
    default:
      return state;
  }
};

export default userDataReducer;
