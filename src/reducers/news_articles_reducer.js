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
      return {
        ...state,
        articles: [...state.articles, next_articles],
      };
    }
    default:
      return state;
  }
}

export default reducer;
