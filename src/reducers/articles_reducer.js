import * as constants from "../common/constants";

function reducer(
  state = {
    current_page_articles: [],
    has_more: false,
  },
  action
) {
  switch (action.type) {
    case constants.NEWS_GET_NEXT: {
      const next_articles = action.payload.articles;
      const has_more =
        action.payload.page_number * action.payload.page_size <
        action.payload.totalResults;

      console.log("payload");
      console.log(action.payload);

      return {
        ...state,
        current_page_articles: [...next_articles],
        has_more: has_more,
      };
    }
    default:
      return state;
  }
}

export default reducer;
