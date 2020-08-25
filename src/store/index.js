import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import produkReducer from "./reducer/produkReducer";
import cartReducer from "./reducer/cartReducer";

const rootReducer = combineReducers({
  produk: produkReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
