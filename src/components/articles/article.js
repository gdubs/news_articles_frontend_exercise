import React from "react";

const Article = ({ article }) => {
  const { title, url, description, urlToImage } = article;
  return (
    <div className="my-card">
      <div>
        <img src={urlToImage} alt={title} className="my-card-image" />
      </div>
      <div className="my-card-title">
        <a href={url}>{title}</a>
      </div>
      <div className="my-card-body">{description}</div>
    </div>
  );
};

export default Article;
