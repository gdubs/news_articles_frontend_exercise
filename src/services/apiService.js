import axios from "axios";

class apiService {
  constructor(base_url) {
    console.log("service " + base_url);
    this.cancel_token;
  }
  getNextNewsArticlesBy(page_size, page_number, search_by) {
    const url = "https://newsapi.org/v2/everything";

    // cancel previous request for on change multi query
    if (typeof this.cancel_token != typeof undefined)
      this.cancel_token.cancel("Requests cancelled");

    this.cancel_token = axios.CancelToken.source();

    // console.log("cancel token after ");
    // console.log(this.cancel_token);

    // gor rem

    // let url_mock = "http://localhost:3000/articles/";
    // let params = {
    //   _limit: page_size,
    //   _page: page_number,
    // };
    // if (search_by) {
    //   params = { ...params, title_like: search_by };
    // }

    // console.log(
    //   `mock params after search by ${search_by}` + JSON.stringify(params)
    // );

    // let config = {
    //   params: params,
    // };
    // return axios({
    //   method: "GET",
    //   url: url_mock,
    //   params: params,
    //   cancelToken: this.cancel_token.token,
    // }).catch((e) => {
    //   if (axios.isCancel(e)) {
    //     console.log("cancelled");
    //   }
    // });
    // gor rem mock

    // final build
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
      url: url,
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
