import React from "react";
import { getArticles } from "../../actions/news_articles_actions";
import { connect } from "react-redux";

class Body extends React.Component {
  constructor() {
    super();

    console.log("bawdy");
  }

  componentDidMount() {
    this.props.getArticles(10, 1);
  }
  render() {
    return <div>body</div>;
  }
}

function mapStateToProps(state) {
  return {
    news_articles: state.news_articles.news_articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: (page_size, page_number) =>
      dispatch(getArticles(page_size, page_number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
