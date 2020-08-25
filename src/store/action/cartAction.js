export const addToCart = (produk) => {
  produk["qty"] = 1;
  return async (dispatch) => {
    dispatch({
      type: "PRODUK_INCART",
      payload: produk,
    });
  };
};

export const changeQty = (qty, id) => {
  return async (dispatch, getState) => {
    const newInput = getState().cart.produkInCart.filter(
      (item) => item.id === id
    );
    newInput[0].qty = qty;
    dispatch({
      type: "CHANGE_QTY",
    });
  };
};

export const deleteFromCart = (id) => {
  return async (dispatch, getState) => {
    const newInput = getState().cart.produkInCart.filter(
      (item) => item.id !== id
    );
    dispatch({
      type: "DELETE_FROM_CART",
      payload: newInput,
    });
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
};
