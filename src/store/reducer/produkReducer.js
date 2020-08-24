const initialState = {
  produkData: "",
  isLoading: true,
  produkDetail: "",
};

export default function produkReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUK_LIST":
      return {
        ...state,
        produkData: action.payload,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "PRODUK_DETAIL":
      return {
        ...state,
        produkDetail: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
