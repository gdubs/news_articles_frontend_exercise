import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/reducers";

const middleWare = applyMiddleware(thunk);
const storeWithMiddleWare = compose(middleWare)(createStore);
const store = storeWithMiddleWare(reducers, {});

export default store;
