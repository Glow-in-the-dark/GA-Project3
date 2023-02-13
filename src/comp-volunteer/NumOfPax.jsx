import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseInput from "../comp-commons/BaseInput";
import BaseButton from "../comp-commons/BaseButton";
import VolunteerForm from "./VolunteerForm";
import CorpForm from "./CorpVolunteer/CorpForm";

const NumOfPax = (props) => {
  // States
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const [corp, setCorp] = useState(false);
  const [dispCorpForm, setDispCorpForm] = useState(false);
  const [dispIndividualForm, setDispIndividualForm] = useState(false);

  // console.log(props.date);
  // console.log(props.showTime);

  // Function to handle changes in user input
  function handleChange(inputId, inputVal) {
    if (inputId === "adult") {
      setAdult(inputVal);
    } else if (inputId === "child") {
      setChild(inputVal);
    }
  }

  const handleChecked = (e) => {
    setCorp(e.target.checked);
  };

  // Function to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    if (corp) {
      setDispCorpForm(true);
    } else {
      setDispIndividualForm(true);
    }
  }

  return (
    <div className="w-[930px] mx-auto text-greyscale1">
      {/* Form section */}
      <div className="flex flex-row space-x-14">
        {/* User input section */}
        <form className="w-[590px] space-y-9" onSubmit={handleSubmit}>
          <span>Adult</span>
          <br />
          <span>16 years and above</span>
          <BaseInput
            type="string"
            id="adult"
            value={adult}
            handleChange={handleChange}
            required={true}
            placeholder="0"
          />
          <br />
          <span>Children</span>
          <br />
          <span>3 - 15 years</span>
          <BaseInput
            type="string"
            id="child"
            value={child}
            handleChange={handleChange}
            required={true}
            placeholder="0*"
            className="mt-9"
          />
          <label>
            <input type={"checkbox"} id="corp" onChange={handleChecked} />
            Tick here if you wish to volunteer as a corporate
          </label>

          <BaseButton
            type="submit"
            label="Continue"
            colour="transparent"
            className="mt-8"
          />
        </form>
      </div>
      {dispCorpForm && <CorpForm />}
      {dispIndividualForm && <VolunteerForm />}
    </div>
  );
};

export default NumOfPax;
