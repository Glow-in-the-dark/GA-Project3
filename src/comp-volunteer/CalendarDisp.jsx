import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NumOfPax from "./NumOfPax";

const CalendarDisp = (props) => {
  const [date, setDate] = useState(new Date()); // Selected data via Cal by user
  const [showTime, setShowTime] = useState(false); // Displays the time slot buttons
  const [timeSlot, setTimeSlot] = useState(""); // Selected time slot by user
  const [slotInfo, setSlotInfo] = useState([]);
  const [filteredSlotInfo, setFilteredSlotInfo] = useState([]);

  const showAppt = async () => {
    setShowTime(true);
  };

  // Function to GET data from backend
  const getAppt = async (modifiedDate) => {
    try {
      const res = await fetch(
        "http://127.0.0.1:5001/volunteer-slots/availability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: modifiedDate }),
        }
      );

      const resData = await res.json();

      // Set SlotInfo state
      setSlotInfo(resData);

      // Set FilteredSlotInfo state
      const filteredData = resData.filter((item) => {
        return [props.roles].indexOf(item.role) > -1;
      });
      setFilteredSlotInfo(filteredData);

      showAppt();
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle timing button click
  function handleTimingButtonClick(e) {
    console.log(e.target.value);
    setTimeSlot(e.target.value);
  }

  // Calls POST request when date changes
  useEffect(() => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let modifiedDate = "";

    if (month < 10) {
      if (day < 10) {
        modifiedDate = `${year}-0${month}-0${day}`;
      } else {
        modifiedDate = `${year}-0${month}-${day}`;
      }
    } else {
      if (day < 10) {
        modifiedDate = `${year}-${month}-0${day}`;
      } else {
        modifiedDate = `${year}-${month}-${day}`;
      }
    }
    console.log(modifiedDate);

    getAppt(modifiedDate);
  }, [date]);

  // Filters response whenever the role or response changes
  useEffect(() => {
    if (slotInfo.length > 1) {
      const filteredData = slotInfo.filter((item) => {
        return [props.roles].indexOf(item.role) > -1;
      });

      setFilteredSlotInfo(filteredData);
    }
  }, [props.roles]);

  // console.log("slotInfo:", slotInfo);
  // console.log("filtered slotInfo:", filteredSlotInfo);
  // console.log(timeSlot);

  return (
    <div className="app">
      <h1 className="header">Select Time Slot</h1>
      <label>Find a time that works for you</label>
      <div>
        <Calendar onChange={setDate} value={date} />
        <div className="space-x-2">
          {filteredSlotInfo.map((item) => {
            return (
              <button
                className="border rounded-md p-2"
                value={item.timing}
                onClick={handleTimingButtonClick}
              >
                {item.timing}
                <br />
                {item.remaining_qty} slots available
              </button>
            );
          })}
        </div>
      </div>

      <p>
        <span>Your selected date is:</span>
        {date.toDateString()}
      </p>

      <p>
        <label>
          Can't find a suitable time slow? Find other ways to contribute here.
        </label>
      </p>
      <NumOfPax date={date} timeSlot={timeSlot} roles={props.roles} />
    </div>
  );
};

export default CalendarDisp;
