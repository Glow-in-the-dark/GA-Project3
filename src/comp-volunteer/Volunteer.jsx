import React, { useState } from "react";
import CalendarDisp from "./CalendarDisp";

const Volunteer = () => {
  const [roles, setRoles] = useState("");
  const [dispCal, setDispCal] = useState(false);

  const getRole = (e) => {
    if (e.target.id === "soup") {
      setRoles("soupkitchen");
      setDispCal(true);
    } else if (e.target.id === "driver") {
      setRoles("driver");
      setDispCal(true);
    }
  };

  return (
    <div className="bg-secondary text-greyscale1">
      <div className="w-[1000px] text-center mx-auto">
        <div className="mb-12">
          <h1 className="mb-4">
            SIGN UP AS A VOLUNTEER
            <br />& MAKE AN IMPACT
          </h1>
          <h3>
            You don't have to look far to find someone in need. You
            <br /> can make a real difference in the lives of those in your
            <br /> own community.
          </h3>
        </div>
        <div className="bg-white rounded-md mb-12">
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
        <div>{dispCal && <CalendarDisp roles={roles} />}</div>
      </div>
    </div>
  );
};

export default Volunteer;
