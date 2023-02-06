import React from "react";

const OtherProjects = (props) => {
  return (
    <>
      <img className="projectImage" src={props.image}></img>
      <label className="projectName">{props.projectName}</label>
      <br />
      <label className="projectContent">{props.projectContent}</label>
      <br />
      <button className="projectButton">Find Out More</button>
    </>
  );
};

export default OtherProjects;
