import React, { useState, useEffect } from "react";
import { getArticles } from "../../actions/news_articles_actions";
import { connect } from "react-redux";

// class Body extends React.Component {
//   constructor() {
//     super();

//     console.log("bawdy");
//   }

//   componentDidMount() {
//     this.props.getArticles(10, 1);
//   }
//   render() {
//     return (
//       <div>
//         <div></div>
//       </div>
//     );
//   }
// }

const Body = ({ news_articles, getArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(10, 1);
  }, []);

  useEffect(() => {
    console.log("props updated");
    setArticles(news_articles);
  }, [news_articles]);

  return (
    <div>
      <h2>Articles</h2>
      {articles?.map((a, i) => {
        return <div key={`article-${a.publishedAt}`}>{a.title}</div>;
      })}
    </div>
  );
};

function mapStateToProps(state) {
  console.log("state to props");
  console.log(state);
  return {
    news_articles: state.articles.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: (page_size, page_number) =>
      dispatch(getArticles(page_size, page_number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
