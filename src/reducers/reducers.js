import { combineReducers } from "redux";
import news_articles from "./news_articles_reducer";

const reducers = combineReducers({ news_articles });

export default reducers;
