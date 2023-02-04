import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BaseAccordian = ({ title, content, border = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Functions to toggle accordian
  function setIsOpenToTrue() {
    setIsOpen(true);
  }

  function setIsOpenToFalse() {
    setIsOpen(false);
  }

  return (
    <div className="w-[650px] text-greyscale1 py-10">
      <div className="flex flex-row text-2xl">
        <h3
          className={`flex-grow ${isOpen ? `text-primary` : `text-greyscale1`}`}
        >
          What You Need To Know
        </h3>
        <div>
          {isOpen ? (
            <FontAwesomeIcon icon={faMinus} onClick={setIsOpenToFalse} />
          ) : (
            <FontAwesomeIcon icon={faPlus} onClick={setIsOpenToTrue} />
          )}
        </div>
      </div>
      {isOpen ? (
        <p className="mt-2">
          We have always been asked - How does Willing Hearts sustain itself? In
          truth, it is with the generous support from friends, volunteers,
          donors and sponsors and just about anyone who believes in our cause.
          We extend our heartfelt gratitude to each one for your generosity and
          continous support since we started!
        </p>
      ) : null}
    </div>
  );
};

export default BaseAccordian;
