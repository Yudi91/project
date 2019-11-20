export const initialState = { loader: true };

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetching":
      console.log(state)
      return { loader: false, data: action.data };
    case "increment":
      return { loader: false };
    case "decrement":
      return { loader: false };
    default:
      return state;
  }
}

export default reducer;
