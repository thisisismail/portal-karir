let initialState = "";

const playVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYEDVIDEO":
      return action.payload;
    default:
      return state;
  }
};

export default playVideoReducer;
