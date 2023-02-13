import React from "react";
import CalendarDisp from "./CalendarDisp";

const Volunteer = () => {
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
        <button>Soup Kitchen Volunteer</button>
        <button>Driver Volunteer</button>
      </div>
      <div>
        <CalendarDisp />;
      </div>
    </>
  );
};

export default Volunteer;
