import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducers,
  productReducers,
} from "./reducers/productReducers";
import { CartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productReducers,
  productDetails: productDetailsReducers,
  cart: CartReducer,
});

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
  
const initialState = {
  cart: { cartItems: cartItemFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
