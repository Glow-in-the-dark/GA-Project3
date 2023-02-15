import { useState } from "react";
import Calendar from "react-calendar";
import Times from "./Times";

import React from "react";

const Time = (props) => {
  return (
    <div>
      {props.showTime ? (
        <Times date={props.date} setTimeSlot={props.setTimeSlot} />
      ) : null}
    </div>
  );
};

export default Time;
