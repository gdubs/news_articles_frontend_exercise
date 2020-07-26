import { isLoading } from "./uiactivity_actions";
import ApiService from "../services/apiService";
import * as constants from "../common/constants";

const apiService = new ApiService("https://newsapi.org/v2/everything");

export function getArticles(page_size, page_number, search_by = "") {
  return function (dispatch) {
    dispatch(isLoading(true));
    return apiService
      .getNextNewsArticlesBy(page_size, page_number, search_by)
      .then((d) => {
        if (typeof d === "undefined") return;

        const payload = {
          ...d.data,
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
