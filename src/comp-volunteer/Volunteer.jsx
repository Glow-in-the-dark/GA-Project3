import React, { useState } from "react";
import CalendarDisp from "./CalendarDisp";

const Volunteer = () => {
  const [role, setRole] = useState("");

  const getRole = (e) => {
    if (e.target.id === "soup") {
      setRole("soupkitchen");
    } else if (e.target.id === "driver") {
      setRole("driver");
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
        <CalendarDisp />;
      </div>
      {console.log(role)}
    </>
  );
};

export default Volunteer;
