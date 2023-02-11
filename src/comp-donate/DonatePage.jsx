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
      <h1>GIVE THE GIFT OF SUPPORT</h1>
      <br />
      <p className="text-sm mb-9">See the impact of your donation</p>
      {/* // very useful! <form action=""></form> the action specifies where the form data is sent, value is a url */}

      <div>
        <p className="text-2xl mb-16">
          Every
          <select id="selection" onChange={handleSelectChange}>
            {/* // IMPORTANT!!! option value is linked to event.target.value of
            handleSelectChange */}
            <option value="100">$100</option>
            <option value="20">$20</option>
            <option value="50">$50</option>
            <option value="200">$200</option>
          </select>
          donated provides {beneficiaries} beneficiaries with meals
        </p>
      </div>
      <br />
      <div className={`mx-auto ${styles.donationModes} bg-white p-12 mb-16`}>
        <h1 className="text-3xl mb-1.5">READY TO MAKE A DONATION?</h1>
        <p className="mb-10">We offer 4 payment methods</p>
        <div className={`mx-auto ${styles.container}`}>
          <li
            className={`${styles.card} ${styles.QRCode}`}
            onMouseEnter={displayQRCode}
            onMouseLeave={displayPayNowPrompt}
          >
            <img src="/donateImages/QRCode.png" />
          </li>
          <li className={styles.card}>
            <p>Credit/Debit Card</p>
            <button>Donate</button>
          </li>
          <li className={styles.card} id={styles.givingSG}>
            <a href="https://www.giving.sg/willing-hearts" target="_blank">
              DONATE givingSG
            </a>
          </li>
          <li className={styles.card}>
            <p>Cash/Cheque</p>
          </li>
        </div>
      </div>

      <div className={`bg-white ${styles.donateInKind} mx-auto py-12`}>
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
    </div>
  );
}

export default DonatePage;
