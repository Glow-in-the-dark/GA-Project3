import React from "react";

const TrainingKitchen = () => {
  return (
    <div className="bg-secondary px-28">
      {/* //////////////////////////// TOP ///////////////////////// */}
      <div className="text-center">
        <h1 className="mb-7">PROJECT: TRAINING KITCHEN</h1>
        <p className="">
          Willing Hearts not only want to feed but empower their beneficiaries
          further by teaching <br />
          them how to feed themselves
          <img
            src="./kitchenImages/stove.png"
            alt=""
            className="mt-14 mx-auto mb-24 w-[1200px] h-[520px] rounded-2xl"
          />
        </p>
      </div>
      {/* /////////////////////// WHAT IS IT ABOUT? /////////////////////////////// */}
      <section className="mb-24">
        <div className="flex justify-center">
          <h1>
            WHAT IS IT <br /> ABOUT?
          </h1>
          <div className="ml-28">
            <p className="mb-14 text-justify w-[692px]">
              Willing Hearts started this initiative to provide culinary
              education and job training to individuals in need. The training
              kitchen will provide hands-on training in the culinary arts and
              food service industry, as well as access to job placement
              assistance. The training kitchen is at the Willing Hearts Soup
              Kitchen in No. 1 Lorong J, Telok Kurau, which is easily accessible
              by public transportation and in close proximity to other community
              resources.
            </p>
            <ul className="list-none flex justify-center space-x-28">
              <li>
                <img
                  src="./kitchenImages/smiley.png"
                  alt=""
                  className="mx-auto"
                />
                <p className="text-center mt-3.5">
                  Have more confidence <br /> in their cooking abilities
                </p>
              </li>
              <li className="">
                <img
                  src="./kitchenImages/clock.png"
                  alt=""
                  className="mx-auto"
                />
                <p className="text-center mt-3.5">
                  See fewer barriers to <br /> making healthy, <br />
                  affordable meals
                </p>
              </li>
              <li>
                <img
                  src="./kitchenImages/dollar.png"
                  alt=""
                  className="mx-auto"
                />
                <p className="text-center mt-3.5">
                  Be able to prepare <br /> healthier, more budget- <br />
                  friendly meals
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* /////////////////////// HOW WILL IT HELP? /////////////////////////////// */}
      <section>
        <div className="flex justify-center">
          <h1>
            HOW WILL
            <br /> IT HELP?
          </h1>
          <div className="ml-28">
            <p className="mb-14 text-justify w-[692px]">
              Evidence suggests that teaching cooking skills can help people
              better manage food insecurity by teaching them how to reduce food
              waste, budget and plan meals, and cook healthy meals with
              inexpensive ingredients. <br /> <br />
              For low-income individuals, time and finances can be barriers to
              continuous healthy cooking. The program strives to help people
              navigate those challenges. The program will also talk about
              allocating time to fixing up dishes that will carry them
              throughout the week. The impact of using time wisely to cook
              hearty, nutritious food will pay off in the long run.
            </p>
            <ul className="list-none flex justify-center space-x-28">
              <li>
                <img
                  src="./kitchenImages/2-persons.png"
                  alt=""
                  className="mx-auto"
                />
                <p className="text-center mt-3.5">
                  This project aims to <br /> reach at least 1000 <br />
                  people in the first year.
                </p>
              </li>
              <li className="">
                <img
                  src="./kitchenImages/handshake.png"
                  alt=""
                  className="mx-auto"
                />
                <p className="text-center mt-3.5">
                  We believe in paying it <br /> forward, each person <br /> we
                  help goes on to <br /> help others in need.
                </p>
              </li>
              <li>
                <img
                  src="./kitchenImages/goalpost.png"
                  alt=""
                  className="mx-auto"
                />
                <p className="text-center mt-3.5">
                  We need to raise <br /> $10,000 to make <br /> this happen.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingKitchen;
