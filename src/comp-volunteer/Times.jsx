import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const time = ["5am-9am", "9am-1pm", "1pm-5pm"];
const Times = (props) => {
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  // console.log(props.date)

  const displayInfo = (e) => {
    setInfo(true);
    setEvent(e.target.innerText);
    props.setTimeSlot(e.target.innerText);
  };

  return (
    <div className="times">
      {time.map((times) => {
        return (
          <div>
            <button onClick={(e) => displayInfo(e)}> {times} </button>
          </div>
        );
      })}
      <div>
        {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`
          : null}
      </div>
    </div>
  );
};

export default Times;
