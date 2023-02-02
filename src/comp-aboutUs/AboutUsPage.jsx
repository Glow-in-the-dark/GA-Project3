import React from "react";

const AboutUsPage = () => {
  const displ = props.result.map((drink, id) => {
    return (
      <>
        <div className="journeyCard">
          <li>
            <Image drink={drink} />
          </li>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="story">
        <h1>OUR STORY</h1>
        <p>
          We are Willing hearts and we run a soup kitchen that provides around
          11,000 daily meals,island-wide 365 days a year (even on public
          holidays). we have a "no questions asked" policy, just as you would
          for your own family. That means that we provide meals to{" "}
          <bold>anyone</bold> who needs it.
        </p>
        <br />
        <p>
          Our belief is that every deserves access to a warm meal and we are
          committed to serving our community with compassion and respect. That's
          the mission of Willing Hearts when it was founded in 2005. We were
          awarded IPC(Institution of Public Character) status in2022.{" "}
        </p>
        <br />
        <p>
          As we are a community-based orgnaisation wholly run by volunteers, we
          hope to establish partnerships with different orgnaisations. These
          orgnaisations could be businesses as well as individual volunteers to
          support the Willing Hearts soup kitchen and the causes that we
          champion.
        </p>
      </div>
      <div className="journey">
        <h1>Our Journey</h1>
      </div>
    </>
  );
};

export default AboutUsPage;
