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
      const next_articles = action.payload.articles.map((a) => {
        const new_guid = hashString(
          `${a.title} ${a.source.name} ${a.publishedAt} ${a.description}`
        );
        // console.log("new guid " + new_guid);
        return {
          ...a,
          guid: new_guid,
        };
      });
      const has_more =
        action.payload.page_number * action.payload.page_size <
        action.payload.totalResults;
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

function hashString(s) {
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}
export default reducer;
