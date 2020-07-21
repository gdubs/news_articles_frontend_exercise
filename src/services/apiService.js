import axios from "axios";

class apiService {
  static getNextNewsArticlesBy(news_count) {
    // key : 31c73574cabe400eb6df638c9abd006b
    const url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=31c73574cabe400eb6df638c9abd006b";

    return axios({
      method: "GET",
      url: url,
    });
  }
}

export default apiService;
