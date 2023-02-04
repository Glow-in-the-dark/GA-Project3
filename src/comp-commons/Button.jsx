import React from "react";
import ShareIcon from "../../public/images/share.png";
import CalendarIcon from "../../public/images/calendar_month.png";

const Button = ({ type, label, colour, className, icon }) => {
  // Conditional styling
  let style;
  if (colour === "white") {
    style = "text-red-500 hover:text-white";
  } else if (colour === "red") {
    style = "bg-red-500 text-white";
  }

  // Conditional Icon

  return (
    <div>
      <button
        className={`h-10 px-5 rounded-md border border-red-500 hover:bg-red-300 ${style} ${
          className ?? ""
        }`}
      >
        <div className="flex flex-row place-items-center justify-center">
          {icon === "share" && <img src={ShareIcon} className="mr-2" />}
          {icon === "calendar" && (
            <img src={CalendarIcon} className="mr-2 mt-1" />
          )}
          {label}
        </div>
      </button>
    </div>
  );
};

export default Button;
