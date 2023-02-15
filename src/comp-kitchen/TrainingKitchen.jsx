import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BaseButton from "../comp-commons/BaseButton";
import { NavLink } from "react-router-dom";
import Footer from "../comp-commons/Footer";

const TrainingKitchen = () => {
  return (
    <div className="bg-secondary px-28">
      {/* //////////////////////////// TOP ///////////////////////// */}
      <div className="text-center">
        <h1 className="mb-7">PROJECT: TRAINING KITCHEN</h1>
        <p className="text-xl">
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
          <div className="ml-20">
            <p className="mb-14 text-justify w-[894px] text-2xl">
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
                <p className="text-center mt-3.5 text-xl">
                  Have more confidence <br /> in their cooking abilities
                </p>
              </li>
              <li className="">
                <img
                  src="./kitchenImages/clock.png"
                  alt=""
                  className="mx-auto"
                />
                <p className="text-center mt-3.5 text-xl">
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
                <p className="text-center mt-3.5 text-xl">
                  Be able to prepare <br /> healthier, more budget- <br />
                  friendly meals
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* /////////////////////// HOW WILL IT HELP? /////////////////////////////// */}
      <section className="pb-24">
        <div className="flex justify-center">
          <h1>
            HOW WILL
            <br /> IT HELP?
          </h1>
          <div className="ml-16">
            <p className="mb-14 text-justify w-[894px] text-2xl">
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
                <p className="text-center mt-3.5 text-xl">
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
                <p className="text-center mt-3.5 text-xl">
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
                <p className="text-center mt-3.5 text-xl">
                  We need to raise <br /> $10,000 to make <br /> this happen.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* /////////////////////// WHAT WE OFFER /////////////////////////////// */}
      <section className="bg-white py-24">
        <div className="flex justify-center">
          <h1>
            WHAT WE
            <br /> OFFER
          </h1>
          <div className="ml-28">
            <div className="mb-14 text-justify w-[894px] ">
              <p className="text-2xl">
                The training kitchen will be run by a team of trained staff and
                volunteers. A detailed budget and financial plan will be
                established to ensure sustainability of the organisation.
                Regualr evaluations will be conducted to measure the
                effectiveness of the training kitchen and make necessary
                adjustments.
              </p>
              <br />
              <br />
              <div>
                <li className="text-2xl">
                  Hands-on training in the culinary arts, including kitchen
                  safety, food preparation,{" "}
                  <span className="text-white">Qll</span> and cooking
                  techniques.
                </li>
                <li className="text-2xl">
                  Access to basic necessities such as clothing and hygiene
                  items.
                </li>
                <li className="text-2xl">
                  Referral services to other community resources as needed.
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            className="w-[1000px]"
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? "absolute" : "hidden"
                  } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="mr-9 self-center"
                  />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? "absolute" : "hidden"
                  } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-9 self-center"
                  />
                </div>
              );
            }}
          >
            <div>
              <img src="./kitchenImages/kitchen-carousel.png" />
              <NavLink to="/volunteer" className="relative bottom-32 left-36">
                <BaseButton label="Volunteer Now" colour="red" />
              </NavLink>
            </div>
            <div>
              <img src="./kitchenImages/kitchen-carousel.png" />
              <NavLink to="/volunteer" className="relative bottom-32 left-36">
                <BaseButton label="Volunteer Now" colour="red" />
              </NavLink>
            </div>
          </Carousel>
        </div>
      </section>
      {/* /////////////////////// HOW CAN YOU HELP? /////////////////////////////// */}
      <section className="bg-secondary py-24">
        <div className="flex justify-center">
          <h1>
            HOW CAN
            <br /> YOU HELP?
          </h1>
          <div className="ml-28">
            <div className="mb-14 text-justify w-[894px] ">
              <p className="text-2xl">
                We are seeking support from community organisations, businesses,
                and individuals to help bring this important project to
                fruition.
              </p>
              <br />
              <br />
              <ul className="list-none flex justify-center space-x-20">
                <img
                  src="./kitchenImages/left-sink.png"
                  alt=""
                  className="rounded-2xl"
                />
                <img
                  src="./kitchenImages/right-sink.png"
                  alt=""
                  className="rounded-2xl"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default TrainingKitchen;
