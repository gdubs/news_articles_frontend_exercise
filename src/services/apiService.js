import axios from "axios";

class apiService {
  constructor(base_url) {
    this.cancel_token;
    this.base_url = base_url;
  }
  getNextNewsArticlesBy(page_size, page_number, search_by) {
    // cancel previous request for on change multi query
    if (typeof this.cancel_token != typeof undefined)
      this.cancel_token.cancel("Requests cancelled");

    this.cancel_token = axios.CancelToken.source();

    let params = {
      pageSize: page_size,
      page: page_number,
      domains: "washingtonpost.com,nytimes.com",
      apiKey: process.env.NEWS_API_KEY,
    };

    if (search_by) {
      params = { ...params, q: search_by };
    }
    return axios({
      method: "GET",
      url: this.base_url,
      params: params,
      cancelToken: this.cancel_token.token,
    }).catch((e) => {
      if (axios.isCancel(e)) {
        console.log("cancelled");
      }
    });
  }
}

export default apiService;
