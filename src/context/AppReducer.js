// A reducer is basically how we specify the application's state changes in response to certain actions to our store/context

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state, // initial state
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ), // action.payload is id that was passed from the GlobalState
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
