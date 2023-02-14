import React, { useState } from "react";
import CalendarDisp from "./CalendarDisp";

const Volunteer = () => {
  const [roles, setRoles] = useState("");

  const getRole = (e) => {
    if (e.target.id === "soup") {
      setRoles("soupkitchen");
    } else if (e.target.id === "driver") {
      setRoles("driver");
    }
  };
  return (
    <>
      <div>
        <h1>SIGN UP AS A VOLUNTEER & MAKE AN IMPACT</h1>
        <label>
          You don't have to look far to find someone in need. You can make a
          real difference in the lives of those in your own community.
        </label>
      </div>
      <div>
        <h1>Select Volunteer Role</h1>
        <label>*Driver Volunteer must have vehicle of their own</label>
        <br />
        <button type="button" id="soup" onClick={getRole}>
          Soup Kitchen Volunteer
        </button>
        <button type="button" id="driver" onClick={getRole}>
          Driver Volunteer
        </button>
      </div>
      <div>
        <CalendarDisp roles={roles} />;
      </div>
    </>
  );
};

export default Volunteer;
