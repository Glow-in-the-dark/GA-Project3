import React from "react";
import OtherProjects from "./Components/OtherProjects";
import projectsDatase from "../datasets/projects";

const ProjectsPage = () => {
  const disp = projectsDatase.map((project, id) => {
    return (
      <>
        <OtherProjects
          image={project.image}
          projectName={project.projectName}
          projectContent={project.projectContent}
        />
      </>
    );
  });

  return (
    <>
      <h1>PROJECTS</h1>
      <label>
        A community of brothers and sisters who lend a helping hand to one
        another. Read more to find out how you can get involved to help.
      </label>

      <div className="soupKitchen">
        <img
          src="Images/Projects/SoupKitchen.png"
          className="soupKitchenImage"
        ></img>
        <h2 className="soupKitchenHeader">SOUP KITCHEN</h2>
        <label className="soupKitchenContent">
          {" "}
          Soup Kitchen is a volunteer-run orgnaisation that serves daily meals
          to those in need in the community. We rely on the kindness and
          generosity of volunteers to prepare and distribute meals. We welcome
          anyone who wants to make a positive impact in ther community to join
          us.
        </label>
        <br />
        <button className="soupKitchenButton" onClick={""}>
          Find Out More
        </button>
      </div>

      <div className="others">
        <h2>OTHER PROJECTS AND ACTIVITIES</h2>
        <button className="ongoing" onClick={""}>
          ONGOING
        </button>
        <button className="past" onClick={""}>
          PAST
        </button>
        {disp}
      </div>
    </>
  );
};

export default ProjectsPage;
