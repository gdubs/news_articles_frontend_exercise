import { isLoading } from "./uiactivity_actions";
import apiService from "../services/apiService";
import * as constants from "../common/constants";

export function getArticles(page_size, page_number) {
  return function (dispatch) {
    console.log("yo get articles");

    dispatch(isLoading(true));

    return apiService
      .getNextNewsArticlesBy(page_size, page_number)
      .then((d) => {
        console.log("yo before dispatch");
        console.log(d.data.articles);
        dispatch({
          type: constants.NEWS_GET_NEXT,
          payload: d.data.articles,
        });
        dispatch(isLoading(false));
      });
  };
}
