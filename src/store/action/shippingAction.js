import axios from "axios";
const url = "https://api.rajaongkir.com/starter";
const api_key = process.env.REACT_APP_API_KEY;

export const getShippingProvince = () => {
    return async (dispatch) => {
        await dispatch({
            type: "LOADING"
        });
        try {
            const res = await axios.get(url + "/province", 
            {
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Access-Control-Allow-Origin": "*",
                  "Key": api_key,
                },
              }
            );
            dispatch({
                type: "GET_PROVINCE_LIST",
                payload: res.data
            })
        }
        catch (error) {
            console.error(error.response);
        }
    }
};