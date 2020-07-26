import { isLoading } from "./uiactivity_actions";
import ApiService from "../services/apiService";
import * as constants from "../common/constants";

const apiService = new ApiService("http://localhost:3000");

export function getArticles(page_size, page_number, search_by = "") {
  return function (dispatch) {
    dispatch(isLoading(true));
    return apiService
      .getNextNewsArticlesBy(page_size, page_number, search_by)
      .then((d) => {
        if (typeof d === "undefined") return;
        // mock
        // gor uncomment const payload = d.data;
        // const payload = {
        //   articles: [...d.data],
        //   totalResults: 4000,
        //   page_number,
        //   page_size,
        // };

        // final
        console.log("yo");
        console.log(d);
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
