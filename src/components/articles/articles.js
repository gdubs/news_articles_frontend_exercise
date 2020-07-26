import React from "react";
import Article from "./article";

class Articles extends React.PureComponent {
  render() {
    // const Articles = ({ articles }) => {
    return (
      <>
        {this.props.articles.map((a, i) => {
          return <Article key={a.guid} article={a} />;
        })}
      </>
    );
    // };
  }
}

export default Articles;
