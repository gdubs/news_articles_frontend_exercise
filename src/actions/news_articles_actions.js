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
        // console.log("yo before dispatch");
        // console.log(d);

        // mock
        // gor uncomment const payload = d.data;
        const payload = {
          articles: [...d.data],
          totalResults: 4000,
          page_number,
          page_size,
        };

        dispatch({
          type: constants.NEWS_GET_NEXT,
          payload,
        });
        dispatch(isLoading(false));
      });
  };
}
