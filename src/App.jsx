import React from "react";
import Button from "./comp-commons/Button";

function App() {
  return (
    <div className="m-16">
      {/* Button */}
      <div className="m-5">
        <p className="text-4xl my-5">Button:</p>
        <Button label="Volunteer Now" colour="red" />
        <br />
        <Button label="Find Out More" colour="white" />
        <br />
        <Button label="Sign Up" colour="white" />
        <br />
        <Button label="Join Us" colour="red" />
        <br />
        <Button label="Donate" colour="red" />
        <br />
        <Button label="Next" colour="red" className="w-[294px]" />
        <br />
        <Button label="Add To Calendar" colour="white" icon="calendar" />
        <br />
        <Button label="Invite Your Friends" colour="white" icon="share" />
      </div>
    </div>
  );
}

export default App;
