import axios from "axios";

class apiService {
  static getNextNewsArticlesBy(page_size, page_number) {
    const url =
      "https://newsapi.org/v2/everything?domains=washingtonpost.com,nytimes.com";

    // gor rem

    const url_mock = "http://localhost:3000/articles";
    console.log("mock " + url_mock);
    return axios({
      method: "GET",
      url: url_mock,
      params: {
        _limit: page_size,
        _page: page_number,
      },
    });
    // gor rem mock

    // let cancel;

    // return axios({
    //   method: "GET",
    //   url: url,
    //   params: {
    //     pageSize: page_size,
    //     page: page_number,
    //     domains: "washingtonpost.com,nytimes.com",
    //     apiKey: process.env.NEWS_API_KEY,
    //   },
    // });
  }
}

export default apiService;
