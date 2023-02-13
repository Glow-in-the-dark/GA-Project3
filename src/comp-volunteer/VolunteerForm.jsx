import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseInput from "../comp-commons/BaseInput";
import BaseButton from "../comp-commons/BaseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const VolunteerForm = () => {
  const navigate = useNavigate();

  // States
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [organisation, setOrgnaisation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle changes in user input
  function handleChange(inputId, inputVal) {
    if (inputId === "name") {
      setName(inputVal);
    } else if (inputId === "mobileNumber") {
      setMobileNumber(inputVal);
    } else if (inputId === "email") {
      setEmail(inputVal);
    } else if (inputId === "password") {
      setPassword(inputVal);
    } else if (inputId === "confirmPassword") {
      setConfirmPassword(inputVal);
    } else if (inputId === "gender") {
      setGender(inputVal);
    } else if (inputId === "dateOfBirth") {
      setDateOfBirth(inputVal);
    } else if (inputId === "organisation") {
      setOrgnaisation(inputVal);
    } else if (inputId === "Occupation") {
      setOccupation(inputVal);
    }
  }

  // Function to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/contact-us/confirmation-page");
  }

  return (
    <div className="w-[930px] mx-auto text-greyscale1">
      {/* Form section */}
      <div className="flex flex-row space-x-14">
        {/* User input section */}
        <form className="w-[590px] space-y-9" onSubmit={handleSubmit}>
          <BaseInput
            type="string"
            id="name"
            value={name}
            handleChange={handleChange}
            required={true}
            placeholder="Name*"
          />
          <BaseInput
            type="string"
            id="subject"
            value={mobileNumber}
            handleChange={handleChange}
            required={true}
            placeholder="MobileNumber*"
            className="mt-9"
          />
          <BaseInput
            type="email"
            id="email"
            value={email}
            handleChange={handleChange}
            required={true}
            placeholder="Email*"
            className="mt-9"
          />
          <BaseInput
            type="string"
            id="subject"
            value={password}
            handleChange={handleChange}
            required={true}
            placeholder="Password*"
            className="mt-9"
          />
          <BaseInput
            type="string"
            id="subject"
            value={confirmPassword}
            handleChange={handleChange}
            required={true}
            placeholder="Confirm Password*"
            className="mt-9"
          />

          <BaseInput
            type="string"
            id="subject"
            value={subject}
            handleChange={handleChange}
            required={false}
            placeholder="Date of Birth(DD/MM/YY)"
            className="mt-9"
          />
          <BaseInput
            type="string"
            id="subject"
            value={organisation}
            handleChange={handleChange}
            required={false}
            placeholder="Organisation"
            className="mt-9"
          />
          <BaseInput
            type="string"
            id="subject"
            value={occupation}
            handleChange={handleChange}
            required={false}
            placeholder="Occupation"
            className="mt-9"
          />
          <label>
            By clicking sign up, you aree to Willing Hearts' Privacy Policy and
            Terms of Use
          </label>
          <BaseButton
            type="submit"
            label="Sign Up"
            colour="transparent"
            className="mt-8"
          />
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
