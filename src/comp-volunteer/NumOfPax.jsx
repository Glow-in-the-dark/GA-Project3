import React from "react";

const NumOfPax = () => {
  return (
    <div>
      <h1> Select No. of Pax</h1>
      <label>
        <span>Adult</span>
        <span>16 Years and above</span>
      </label>
      <input placeholder="1"></input>
      <label>
        <span>Children</span>
        <span>3-15 years</span>
      </label>
      <input placeholder="0"></input>
      <br />
      <button>Continue</button>
    </div>
  );
};

export default NumOfPax;
