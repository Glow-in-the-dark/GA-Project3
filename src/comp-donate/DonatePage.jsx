import { useEffect, useState } from "react";
import styles from "./DonatePage.module.css";

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
    <>
      <h1>YOUR DONATION MAKES A DIFFERENCE</h1>
      <p>
        With your support, we are able to provide meals and support services to
        those who are in need. Your <br /> donation ensures that no one goes
        hunrgy and that no one goes without the basic necessities of life.
      </p>
      <img src="/donateImages/donationMain.png" />
      <h1>GIVE THE GIFT OF SUPPORT</h1>
      <p>See the impact of your donation</p>

      {/* // very useful! <form action=""></form> the action specifies where the form data is sent, value is a url */}

      <p>
        Every
        <select id="selection" onChange={handleSelectChange}>
          // IMPORTANT!!! option value is linked to event.target.value of
          handleSelectChange
          <option value="100">$100</option>
          <option value="20">$20</option>
          <option value="50">$50</option>
          <option value="200">$200</option>
        </select>
        donated provides {beneficiaries} beneficiaries with meals
      </p>

      <div className={styles.donationModes}>
        <p>READY TO MAKE A DONATION?</p>
        <p>We offer 4 payment methods</p>
        <div className="container">
          <li
            className={`${styles.card} ${styles.QRCode}`}
            onMouseEnter={displayQRCode}
            onMouseLeave={displayPayNowPrompt}
          >
            <img src="/images/QRCode.png" />
          </li>
          <li className={styles.card}>
            <p>Credit/Debit Card</p>
            <button>DONATE card</button>
          </li>
          <li className={styles.card} id={styles.givingSG}>
            <a href="https://www.giving.sg/willing-hearts">DONATE givingSG</a>
          </li>
          <li></li>
        </div>
      </div>
    </>
  );
}

export default DonatePage;
