import React from "react";

const NewsCard = (props) => {
  return (
    <>
      <div className="newsCard">
        <img className="newsImage" src={props.image}></img>
        <label className="newsContent">{props.newsContent}</label>
        <label className="newsSource">{props.newsSource}</label>
        <label className="newsDate">{props.newsDate}</label>
      </div>
    </>
  );
};

export default NewsCard;
