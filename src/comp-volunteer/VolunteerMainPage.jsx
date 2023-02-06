import React from "react";
import BaseButton from "../comp-commons/BaseButton";
import AccordianWrapper from "../comp-commons/AccordianWrapper";
import Footer from "../comp-commons/Footer";
import volunteerMainFaq from "../datasets/volunteerMainFaq";

const VolunteerMainPage = () => {
  return (
    <div className="bg-secondary text-greyscale1 pt-24">
      {/* section 1 */}
      <section className="w-[1000px] mx-auto text-center pb-20">
        <h1 className="mb-10">
          VOLUNTEERING AT
          <br />
          WILLING HEARTS IS SIMPLE
        </h1>
        <h2 className="mb-6">
          Just bring a similing face, two helping hands, a willing heart and the
          question "How can I help
          <br />
          today?" That's all it takes to make a difference in your community.
        </h2>
        <BaseButton label="Join Us" colour="red" className="mb-14" />
        <img
          src="public/Images/VolunteerPage/founder-teaching-students.png"
          className="rounded-2xl"
        />
      </section>

      {/* section 2 */}
      <div className="bg-white py-20">
        <section className="w-[1200px] mx-auto text-center">
          <h1 className="mb-4">VOLUNTEER ROLES</h1>
          <p className="mb-16">
            There will always be someone who needs a helping hand at the soup
            kitchen. Someone will grab you along the way,
            <br />
            asking for help.
          </p>
          <div className="flex flex-row space-x-20 mx-auto mb-14">
            <div className="w-[370px]">
              <img
                src="public/Images/VolunteerPage/cartoon-ingredients.png"
                className="mx-auto mb-6"
              />
              <p className="text-2xl mb-4">PREPERATION OF INGREDIENTS</p>
              <p className="">
                This involves chopping vegetables, prepping
                <br />
                meat, opening bottles and packets of sauces,
                <br />
                cooking the food, and other tasks for the
                <br />
                meals to be ready and deliverd on time.
              </p>
            </div>
            <div className="w-[370px]">
              <img
                src="public/Images/VolunteerPage/cartoon-ingredients.png"
                className="mx-auto mb-6"
              />
              <p className="text-2xl mb-4">CLEANING & WASHING</p>
              <p className="">
                Often the most overlooked part of the
                <br />
                whole process. Used trays, covers,
                <br />
                baskets, cooking utensils, pots and pans
                <br />
                all need washing.
              </p>
            </div>
            <div className="w-[370px]">
              <img
                src="public/Images/VolunteerPage/cartoon-ingredients.png"
                className="mx-auto mb-6"
              />
              <p className="text-2xl mb-4">PACKING LUNCH BOXES</p>
              <p className="">
                This is a relatively simple task: line up
                <br />
                food containers, scoop portions of rice
                <br />
                along with other dishes of the day, cover
                <br />
                the containers and put them into the
                <br />
                delivery basket.
              </p>
            </div>
          </div>
          <hr />
          <div className="w-[370px] mx-auto mt-14">
            <img
              src="public/Images/VolunteerPage/cartoon-ingredients.png"
              className="mx-auto mb-6"
            />
            <p className="text-2xl mb-4">DRIVER</p>
            <p className="">
              Food distribution is crucial for Willing
              <br />
              Hearts to provide their daily meal service
              <br />
              and ensure that beneficiaries have food to
              <br />
              eat throughout the year.
            </p>
          </div>
        </section>
      </div>

      {/* section 3 */}
      <section className="text-center py-20">
        <h1 className="mb-10">WE ARE OPEN DAILY!</h1>
        <h2 className="mb-8">
          The Soup Kitchen is open every day, 365 days a year including Weekends
          and Public Holidays.
        </h2>
        <div className="w-fit mx-auto text-left">
          <h2 className="mb-2">These are our volunteer timings:</h2>
          <ul className="text-xl list-disc list-inside">
            <li>Early Morning (5am - 9am)</li>
            <li>Morning (9am - 1pm)</li>
            <li>Afternoon (1pm - 5pm)</li>
          </ul>
        </div>
      </section>

      {/* section 4 */}
      <section></section>

      {/* section 5 */}
      <div className="py-20">
        <section className="w-[1000px] mx-auto text-center">
          <img
            src="public/Images/VolunteerPage/large-group-of-volunteers.png"
            className="rounded-2xl mb-16"
          />
          <h1 className="mb-10">FOR VOLUNTEERING IN GROUPS</h1>
          <h2 className="mb-10">
            Join us for a day or multiple days a week. At Willing Hearts, we
            offer a flexible schedule, so you don't have
            <br />
            to worry about being unable to commit in order to contribute.
          </h2>
          <h2 className="mb-5">
            If you are planning to come with a large group, please contact us.
          </h2>
          <BaseButton label="Contact Us" colour="red" />
        </section>
      </div>

      {/* section 6 */}
      <div className="bg-white py-20">
        <section className="text-center">
          <h1 className="mb-10">WE GRANT CIP HOURS!</h1>
          <h2 className="mb-10">
            At Willing Hearts, we recognize the importance of community
            <br />
            involvement and service for our youth. That's why we offer the
            <br /> opportunity for students to earn Community Involvement
            <br />
            Program (CIP) hours by participating in our volunteer program.
          </h2>
          <h2 className="mb-5">Click here to download the log sheet.</h2>
          <BaseButton label="Volunteer Now" colour="red" />
        </section>
      </div>

      {/* section 7 */}
      <section className="py-20">
        <AccordianWrapper title="FAQ" contentDataset={volunteerMainFaq} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VolunteerMainPage;
