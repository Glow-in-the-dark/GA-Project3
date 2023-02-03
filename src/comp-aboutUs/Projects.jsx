import React from "react";
import OtherProjects from "./Components/OtherProjects";

const Projects = () => {
  const proj = [
    {
      image: "Images/Projects/Book.png",
      projectName: "COMMEMORATIVE BOOK",
      projectContent:
        "Support Sout Kitchen operations by purchasing the exclusive commemorative cookbook from 11 renowned chefs.",
    },
    {
      image: "Images/Projects/FoodDrive.png",
      projectName: "FOOD DRIVE",
      projectContent:
        "The donations collected during the food drive are distributed to local food banks, shelters and pantries to feed those who may be struggling with food insecurity.",
    },
    {
      image: "Images/Projects/TrainingKitchen.png",
      projectName: "TRAINING KITCHEN",
      projectContent:
        "An initiative to carry out training kitchens open for those who want to learn how to cook for themselves.",
    },
  ];

  const disp = proj.map((project, id) => {
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

export default Projects;
