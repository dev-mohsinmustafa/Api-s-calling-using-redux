

// Reducers

export function apiReducers(state = [], action) {
  switch (action.type) {
    // actionname is GET_DATA
    case "GET_DATA":
      return action.payload;
      // action se jo payload araha hai wo data yaha he rahe ga 
    default:
      return state;
  }
}
