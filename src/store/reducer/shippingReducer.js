const initialState = {
  province: "",
  isLoading: true,
};

export default function shippingReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PROVINCE_LIST":
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
    default:
      return state;
  }
}
