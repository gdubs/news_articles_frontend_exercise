import apiService from "../services/apiService";
import * as constants from "../common/constants";

export function getArticles(page_size, page_number) {
  return function (dispatch) {
    console.log("yo get articles");
    return apiService
      .getNextNewsArticlesBy(page_size, page_number)
      .then((d) => {
        console.log(d);
      });
  };
}
