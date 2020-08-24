// import data from "../../dataJSON/produk.json";

export const changeInput = (el) => {
  return {
    type: "CHANGE_INPUT",
    payload: el,
  };
};

export const inputQty = () => {
  return async (dispatch, getState) => {
    const qty = getState().cart.name;
    dispatch({
      type: "QTY_PRODUK",
      payload: qty,
    });
  };
};

export const addToCart = (produk) => {
  return async (dispatch) => {
    dispatch({
      type: "PRODUK_INCART",
      payload: produk,
    });
  };
};
