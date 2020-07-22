import { combineReducers } from "redux";
import articles from "./articles_reducer";

const reducers = combineReducers({ articles });

export default reducers;
