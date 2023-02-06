import React from "react";

const NewsCard = (props) => {
  return (
    <>
      <a href={props.newsLink}>
        <div className="newsCard">
          <img className="newsImage" src={props.image}></img>
          <label className="newsContent">{props.newsContent}</label>
          <label className="newsSource">{props.newsSource}</label>
          <label className="newsDate">{props.newsDate}</label>
        </div>
      </a>
    </>
  );
};

export default NewsCard;
