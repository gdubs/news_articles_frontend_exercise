import * as constants from "../common/constants";

function reducer(
  state = {
    articles: [],
  },
  action
) {
  switch (action.type) {
    case constants.NEWS_GET_ALL: {
      const articles = action.payload;
      return {
        ...state,
        articles: articles,
      };
    }
    case constants.NEWS_GET_NEXT: {
      const next_articles = action.payload;
      console.log("payload");
      console.log(next_articles);
      return {
        ...state,
        articles: [...next_articles],
      };
    }
    default:
      return state;
  }
}

export default reducer;
