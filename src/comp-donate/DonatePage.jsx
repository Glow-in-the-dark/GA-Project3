import { useEffect, useState } from "react";
import styles from "./DonatePage.module.css";
import BaseButton from "../comp-commons/BaseButton";

function DonatePage() {
  const [beneficiaries, setBeneficiaries] = useState(330); // need to use useEffect to change beneficiaries value each time option changes
  const [selection, setSelection] = useState("100");

  const changeAmount = () => {
    setBeneficiaries(selection * 3.3);
  };

  const handleSelectChange = (event) => {
    setSelection(event.target.value);
  };

  useEffect(() => {
    changeAmount();
  }, [selection]);

  const displayQRCode = () => {};

  const displayPayNowPrompt = () => {};

  return (
    <div className="text-center bg-secondary">
      <h1 className="text-5xl m-1.5">YOUR DONATION MAKES A DIFFERENCE</h1>
      <p className="text-lg mb-12">
        With your support, we are able to provide meals and support services to
        those who are in need. Your <br /> donation ensures that no one goes
        hunrgy and that no one goes without the basic necessities of life.
      </p>
      <img
        src="/donateImages/donationMain.png"
        className={`mx-auto ${styles.topImage} mb-16`}
      />
      <br />
      <h1 className="mb-9">GIVE THE GIFT OF SUPPORT</h1>
      <br />
      {/* // very useful! <form action=""></form> the action specifies where the form data is sent, value is a url */}

      <div className="mb-16 text-primary">
        <p className="text-2xl">
          Every
          <select
            id="selection"
            onChange={handleSelectChange}
            className="text-5xl px-4 mx-2 rounded-2xl"
          >
            {/* // IMPORTANT!!! option value is linked to event.target.value of
            handleSelectChange */}
            <option value="100">$100</option>
            <option value="20">$20</option>
            <option value="50">$50</option>
            <option value="200">$200</option>
          </select>
          donated provides{" "}
          <span className="text-5xl mx-2 underline decoration-solid">
            {beneficiaries}
          </span>{" "}
          beneficiaries with meals
        </p>
      </div>
      <br />
      <div
        className={`mx-auto ${styles.donationModes} bg-white p-12 mb-16 rounded-2xl`}
      >
        <h1 className="text-3xl mb-1.5">READY TO MAKE A DONATION?</h1>
        <p className="mb-10 text-xl">We offer 4 payment methods</p>
        <div className={`mx-auto ${styles.container}`}>
          <li
            className={`${styles.card} ${styles.QRCode}`}
            onMouseEnter={displayQRCode}
            onMouseLeave={displayPayNowPrompt}
          >
            <img
              src="./donateImages/QRCodeCover.png"
              className="mx-20 mt-10 mb-4"
            />
            <p className="">PayNow QR</p>
            <div className="mb-7 mt-3">
              <BaseButton label="Donate" colour="red" />
            </div>
          </li>
          <li className={styles.card}>
            <img src="./donateImages/creditcard.png" className="mx-16 mt-7" />
            <p className="">Credit/Debit Card</p>
            <div className="mb-7 mt-3">
              <BaseButton label="Donate" colour="red" />
            </div>
          </li>
          <li className={styles.card} id={styles.givingSG}>
            <img
              src="./donateImages/givingSG.png"
              className="mx-12 mt-20 mb-10"
            />
            <p className="">Giving.sg</p>
            <a
              href="https://www.giving.sg/willing-hearts"
              target="_blank"
              className="mb-4"
            >
              <div className="mb-7 mt-3">
                <BaseButton label="Donate" colour="red" />
              </div>
            </a>
          </li>
          <li className={styles.card}>
            <img src="./donateImages/cash.png" className="mx-20 mt-10 mb-3" />
            <p>Cash/Cheque</p>
            <div className="mb-7 mt-3">
              <BaseButton label="Donate" colour="red" />
            </div>
          </li>
        </div>
      </div>

      <div
        className={`bg-white ${styles.donateInKind} mx-auto py-12 rounded-2xl`}
      >
        <h1 className="text-3xl mb-2">PREFER TO DONATE IN KIND?</h1>
        <p className="text-xl mb-4">Here are some recommended list of items</p>
        <img
          src="./public/donateImages/ingredients.png"
          className="mx-auto mb-14"
        />
        <div className="">
          <p className="text-base mb-4">
            You may wish to donate directly to Willing Hearts at
          </p>
          <h3 className="text-xl">
            No.1 Lorong J Telok Kurau Singapore 425792
          </h3>
          <h3 className="text-xl mb-4">We are open from 4.30 am to 3.00 pm</h3>
          <p className="text-base">
            For donations in large quantities of provisions and/or frozen
            ingredients, please click here
          </p>
        </div>
      </div>
      

      {/* <div class="py-4">
        <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
          <div>
            <div class="w-full image-cover rounded-t-md">
              <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-0">
                <span class="text-base tracking-wide  font-bold border-b border-white font-sans">
                  {" "}
                  12
                </span>
                <span class="text-xs tracking-wide font-bold uppercase block font-sans">
                  April
                </span>
              </div>
            </div>
            <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-0">
              <span class="block text-lg text-gray-800 font-bold tracking-wide">
                Book a flight
              </span>
              <span class="block text-gray-600 text-sm">
                Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
                Donec bibendum faucibus purus eget cursus. Proin enim ante,
                scelerisque vel sem sit amet, ultrices mollis risus. Praesent
                justo felis, ullamcorper a cursus sed, condimentum at dui.
              </span>
            </div>
          </div>
          <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
            <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
              Paris city of light
            </span>
            <div class="pt-8 text-center">
              <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default DonatePage;
