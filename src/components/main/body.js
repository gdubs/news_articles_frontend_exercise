import React, { useState, useEffect, useRef, useCallback } from "react";
import { getArticles } from "../../actions/news_articles_actions";
import { connect } from "react-redux";
import Article from "../articles/article";
require("../../styles/card.scss");

const Body = ({
  has_more,
  current_page_articles,
  is_loading_next,
  getArticles,
  scrollable,
}) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentPage === 1 && !isLoading) getArticles(100, currentPage);
  }, []);

  useEffect(() => {
    if (currentPage !== 1 && !isLoading) getArticles(10, currentPage);
  }, [currentPage]);

  useEffect(() => {
    setArticles([...articles, ...current_page_articles]);
  }, [current_page_articles]);

  useEffect(() => {
    setIsLoading(is_loading_next);
  }, [is_loading_next]);

  // scrolling trigger
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setCurrentPage((pv) => pv + 1);
  }

  const getuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const renderArticles = () => {
    if (articles && articles.length > 0)
      return articles.map((a, i) => {
        return <Article key={`article-${getuid()}`} article={a} />;
      });
  };

  return (
    <div>
      <h2>Articles</h2>
      <div className="my-cards" id="articles">
        {renderArticles()}
        {isLoading ? "Loading new articles..." : null}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    current_page_articles: state.articles.current_page_articles,
    has_more: state.articles.has_more,
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
