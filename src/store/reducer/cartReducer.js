const initialState = {
  isLoading: true,
  produkInCart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "PRODUK_INCART":
      return {
        ...state,
        produkInCart: [...state.produkInCart, action.payload],
      };
    case "CHANGE_QTY":
      return {
        ...state,
        produkInCart: [...state.produkInCart],
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        produkInCart: action.payload,
      };
    case "CLEAR_CART":
      return {
        ...state,
        produkInCart: [],
      };
    default:
      return state;
  }
}
