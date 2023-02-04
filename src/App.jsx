import React from "react";
import BaseButton from "./comp-commons/BaseButton";

function App() {
  return (
    <div className="m-16">
      {/* Button */}
      <div className="m-5">
        <p className="text-4xl my-5">Button:</p>
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
    </div>
  );
}

export default App;
