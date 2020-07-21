import apiService from "../services/apiService";
import * as constants from "../common/constants";

export function getArticles() {
  return function (dispatch) {
    console.log("yo get articles");
    return apiService.getNextNewsArticlesBy(10).then((d) => {
      console.log(d);
    });
  };
}
