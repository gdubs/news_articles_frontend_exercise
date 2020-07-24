import React, { useState, useEffect } from "react";
import { getArticles } from "../../actions/news_articles_actions";
import { connect } from "react-redux";
require("../../styles/card.scss");

const Body = ({ is_loading_next, news_articles, getArticles }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(is_loading_next);
  }, [is_loading_next]);

  useEffect(() => {
    getArticles(10, currentPage);
  }, []);

  useEffect(() => {
    console.log("props updated");
    setArticles(news_articles);
    setCurrentPage(currentPage + 1);
  }, [news_articles]);

  const renderArticles = () => {
    return articles.map((a, i) => {
      return (
        <div key={`article-${a.publishedAt}`} className="my-card">
          <div>
            <img src={a.urlToImage} alt={a.title} />
          </div>
          <div className="my-card-title">
            <a href={a.url}>{a.title}</a>
          </div>
          <div className="my-card-body">{a.description}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Articles</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="my-cards">{renderArticles()}</div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  console.log("state to props");
  console.log(state);
  return {
    news_articles: state.articles.articles,
    is_loading_next: state.uiactivity.is_loading_next,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: (page_size, page_number) =>
      dispatch(getArticles(page_size, page_number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
