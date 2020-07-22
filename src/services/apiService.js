import axios from "axios";

class apiService {
  static getNextNewsArticlesBy(page_size, page_number) {
    // key : 31c73574cabe400eb6df638c9abd006b
    const url =
      "https://newsapi.org/v2/everything?domains=washingtonpost.com,nytimes.com?" +
      `&pageSize=${page_size}` +
      `&page=${page_number}` +
      `&apiKey=${process.env.NEWS_API_KEY}`;

    console.log("url " + url);
    return axios({
      method: "GET",
      url: url,
    });
  }
}

export default apiService;
