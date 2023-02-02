import React from "react";

const Journey = (props) => {
  return (
    <>
      <img src={props.image}></img>
      <label className="home">{props.homeName}</label>
      <br />
      <label className="year">{props.year}</label>
      <br />
      <label className="content">{props.content}</label>
    </>
  );
};

export default Journey;
