import React from "react";
import BaseButton from "./BaseButton";
import Footer from "./Footer";

import BaseAccordian from "./BaseAccordian";

function CommonComponentExamples() {
  return (
    <div className="bg-secondary">
      {/* Button */}
      <div className="m-5">
        <p className="text-4xl mb-5">Button:</p>
        <BaseButton label="Volunteer Now" colour="red" />
        <br />
        <BaseButton label="Find Out More" colour="white" />
        <br />
        <BaseButton label="Sign Up" colour="white" />
        <br />
        <BaseButton label="Join Us" colour="red" />
        <br />
        <BaseButton label="Donate" colour="red" />
        <br />
        <BaseButton label="Next" colour="red" className="w-[294px]" />
        <br />
        <BaseButton label="Add To Calendar" colour="white" icon="calendar" />
        <br />
        <BaseButton label="Invite Your Friends" colour="white" icon="share" />
      </div>
      {/* Footer */}
      <div className="mt-16">
        <p className="text-4xl my-5 mx-5">Footer:</p>
        <Footer />
      </div>
      {/* Accordian Wrapper */}
      <BaseAccordian />
    </div>
  );
}

export default CommonComponentExamples;
