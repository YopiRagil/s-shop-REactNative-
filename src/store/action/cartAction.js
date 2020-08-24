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
  produk["qty"] = 1;
  return async (dispatch) => {
    console.log(produk);
    dispatch({
      type: "PRODUK_INCART",
      payload: produk,
    });
  };
};
