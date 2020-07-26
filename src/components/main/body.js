import React, { useState, useEffect, useRef, useCallback } from "react";
import { getArticles } from "../../actions/news_articles_actions";
import { connect } from "react-redux";
import Articles from "../articles/articles";
import Header from "./header";
import MetaTags from "react-meta-tags";
require("../../styles/card.scss");

const Body = ({
  has_more,
  current_page_articles,
  is_loading_next,
  getArticles,
}) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    if (
      searchBy !== "" &&
      typeof searchBy !== "undefined" &&
      searchBy !== null
    ) {
      setArticles([]);
      getArticles(100, 1, searchBy);
    } else {
      // initial load or search was reset
      setArticles([]);
      getArticles(100, 1, searchBy);
      setCurrentPage(5);
    }
  }, [searchBy]);

  useEffect(() => {
    if ((currentPage !== 1 || currentPage !== 5) && !isLoading && has_more) {
      getArticles(10, currentPage, searchBy);
    }
  }, [currentPage]);

  useEffect(() => {
    setArticles([...articles, ...current_page_articles]);
  }, [current_page_articles]);

  useEffect(() => {
    setIsLoading(is_loading_next);
  }, [is_loading_next]);

  // scrolling trigger -- infinite
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setCurrentPage((pv) => pv + 1);
  };

  const onSearch = (e) => {
    setSearchBy(e.target.value);
  };

  return (
    <>
      <Header searchHandler={onSearch} is_loading={isLoading}></Header>
      <div className="main">
        <h2>Articles</h2>
        <div className="my-cards" id="articles">
          {articles.length > 0 ? (
            <>
              <MetaTags>
                <title>US News</title>
                <meta name="description" content={articles[0].description} />
                <meta property="og:title" content="US news" />
                <meta property="og:image" content={articles[0].urlToImage} />
              </MetaTags>
              <Articles articles={articles} />
            </>
          ) : !isLoading ? (
            <div className="my-card">
              <div className="my-card-body">No articles found</div>
            </div>
          ) : null}
        </div>
      </div>
    </>
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
    getArticles: (page_size, page_number, search_by) =>
      dispatch(getArticles(page_size, page_number, search_by)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
