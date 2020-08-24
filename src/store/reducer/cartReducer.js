const initialState = {
  isLoading: true,
  qtyOrder: "",
  produkInCart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "CHANGE_INPUT_REGISTER":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "QTY_PRODUK":
      return {
        ...state,
        qtyOrder: action.payload,
      };
    case "PRODUK_INCART":
      return {
        ...state,
        produkInCart: [...state.produkInCart, action.payload],
      };
    default:
      return state;
  }
}
