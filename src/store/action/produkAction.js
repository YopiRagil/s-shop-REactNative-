import data from "../../dataJSON/produk.json";

export const getProduk = () => {
  return async (dispatch) => {
    await dispatch({
      type: "LOADING",
    });
    dispatch({
      type: "GET_PRODUK_LIST",
      payload: data,
    });
  };
};

export const getProdukDetail = (idProduk) => {
  return async (dispatch) => {
    await dispatch({
      type: "LOADING",
    });
    dispatch({
      type: "PRODUK_DETAIL",
      payload: data.filter((item) => item.id === idProduk),
    });
  };
};
