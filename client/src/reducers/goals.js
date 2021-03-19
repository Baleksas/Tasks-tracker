import Goals from "../components/Goals/Goals";

export default (state = [], action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((goal) => goal._id !== action.payload);
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};
