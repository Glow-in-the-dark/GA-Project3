import React from "react";

const Journey = (props) => {
  return (
    <div className="w-[285px] text-center">
      <img src={props.image} className="rounded-2xl mb-3" />
      <p className="text-xl mb-2">{props.homeName}</p>
      <p className="text-3xl mb-4">{props.year}</p>
      <p className="text-greyscale2">{props.content}</p>
    </div>
  );
};

export default Journey;
