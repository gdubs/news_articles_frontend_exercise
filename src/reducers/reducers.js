import { combineReducers } from "redux";
import articles from "./articles_reducer";
import uiactivity from "./uiactivity_reducer";

const reducers = combineReducers({ articles, uiactivity });

export default reducers;
