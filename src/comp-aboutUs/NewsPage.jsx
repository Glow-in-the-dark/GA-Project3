import React from "react";
import NewsCard from "./Components/NewsCard";
import newsDataset from "../datasets/news";

const NewsPage = () => {
  const disp = newsDataset.map((news, id) => {
    return (
      <div className="newsCard">
        <NewsCard
          image={news.image}
          newsLink={news.newsLink}
          newsContent={news.newsContent}
          newsSource={news.newsSource}
          newsDate={news.newsDate}
        />
      </div>
    );
  });

  return (
    <>
      <h1 className="newsHeader">WE ARE ON THE NEWS</h1>
      <br />
      <label className="newsLabel">
        Stay ahead of the curve with our featured news.
      </label>
      {disp}
    </>
  );
};

export default NewsPage;
