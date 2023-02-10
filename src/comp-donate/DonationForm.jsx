import React, { useState, useRef } from "react";
import BaseButton from "../comp-commons/BaseButton";
import BaseInput from "../comp-commons/BaseInput";

const DonationForm = () => {
  const [taxDeduction, setTaxDeduction] = useState(false);
  const [personaChoice, setPersonaChoice] = useState("persona");
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationFrequency, setDonationFrequency] = useState(null);
  const [particulars, setParticulars] = useState({});

  const [particularsName, setParticularsName] = useState("");
  const [particularsNRIC, setParticularsNRIC] = useState("");
  const [particularsMobile, setParticularsMobile] = useState("");
  const [particularsEmail, setParticularsEmail] = useState("");
  const [particularsAddress, setParticularsAddress] = useState("");

  const [data, setData] = useState({
    persona: personaChoice,
    taxDeduction: taxDeduction,
    particulars: particulars,
    donationAmount: donationAmount,
    donationFrequency: donationFrequency,
  });

  const submitParticulars = () => {
    setParticulars({
      particularsName: particularsName,
      particularsNRIC: particularsNRIC,
      particularsMobile: particularsMobile,
      particularsEmail: particularsEmail,
      particularsAddress: particularsAddress,
    });
  };

  const submitDonationForm = (e) => {
    e.preventDefault();
    setData({
      ...data,
      persona: personaChoice,
      taxDeduction: taxDeduction,
      particulars: particulars,
      donationAmount: donationAmount,
      donationFrequency: donationFrequency,
    });
  };

  function handleChange(inputId, inputVal) {
    if (inputId === "name") {
      setParticularsName(inputVal);
    }
    if (inputId === "nric") {
      setParticularsNRIC(inputVal);
    }
    if (inputId === "mobile") {
      setParticularsMobile(inputVal);
    }
    if (inputId === "email") {
      setParticularsEmail(inputVal);
    }
    if (inputId === "address") {
      setParticularsAddress(inputVal);
    }
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl">
          YOUR SUPPORT CAN <br />
          CHANGE A LIFE
        </h1>
        <br />
        <p className="text-xl">
          Every donation counts, support now. Your contribution can <br /> make
          a world of difference in the lives of those in need.
        </p>
      </div>
      <br />
      <div className="w-[996px] mx-auto" style={{ background: "yellow" }}>
        <h4 className="text-2xl" style={{ position: "relative", left: "63px" }}>
          1. Select Individual/Corporate
        </h4>
        <p
          className="text-base"
          style={{ position: "relative", left: "102px" }}
        >
          We are an IPC registered charity, all monetary donations will be
          entitled to tax relief
        </p>

        {/* submitDonationForm submits the entire donation form */}
        <form onSubmit={submitDonationForm}>
          <div>
            <div
              style={{ position: "relative", left: "102px" }}
              className="flex"
            >
              <div onClick={() => setPersonaChoice("Individual")}>
                <BaseButton label="Individual" />
              </div>
              <div onClick={() => setPersonaChoice("Corporate")}>
                <BaseButton label="Corporate" />
              </div>
            </div>

            <br />
            <input
              type="checkbox"
              id="taxDeduct"
              onClick={() => setTaxDeduction(!taxDeduction)}
              style={{ position: "relative", left: "102px" }}
            />
            <label
              htmlFor="taxDeduct"
              style={{ position: "relative", left: "110px" }}
            >
              I would like to receive tax relief for this donation
            </label>
            <br />

            <div style={{ position: "relative", left: "102px" }}>
              <BaseButton label="Continue" />
            </div>
          </div>

          {/* display taxDeduction form only when checkbox is ticked */}
          {taxDeduction && (
            <div>
              <h4
                className="text-2xl"
                style={{ position: "relative", left: "63px" }}
              >
                2. Enter Particulars
              </h4>
              <div className="particulars-form">
                <div>
                  <BaseInput
                    type="string"
                    id="name"
                    value={particularsName}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Name*"
                  />
                  <BaseInput
                    type="string"
                    id="nric"
                    value={particularsNRIC}
                    handleChange={handleChange}
                    required={true}
                    placeholder="NRIC/FIN Number"
                  />
                  <BaseInput
                    type="string"
                    id="mobile"
                    value={particularsMobile}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Mobile Number*"
                  />
                  <BaseInput
                    type="string"
                    id="email"
                    value={particularsEmail}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Email Address*"
                  />
                  <BaseInput
                    type="string"
                    id="address"
                    value={particularsAddress}
                    handleChange={handleChange}
                    required={true}
                    placeholder="Address"
                  />
                </div>

                <div onClick={submitParticulars}>
                  <BaseButton label="Continue" colour="red" />
                </div>
                {/* <button onClick={submitParticulars}>Continue</button> */}
              </div>
            </div>
          )}

          <div>
            <h4>Credit Card Payment</h4>
            <p>All transactions are secured and encrypted</p>
            <div className="flex">
              <div onClick={() => setDonationAmount(10)}>
                <BaseButton label="$10" />
              </div>
              <div onClick={() => setDonationAmount(50)}>
                <BaseButton label="$50" />
              </div>
              <div onClick={() => setDonationAmount(100)}>
                <BaseButton label="$100" />
              </div>
              <div onClick={() => setDonationAmount(200)}>
                <BaseButton label="$200" />
              </div>
              <div>
                <BaseInput label="" />
              </div>
            </div>
            <div className="flex">
              <div onClick={() => setDonationFrequency("Donate Once")}>
                <BaseButton label="Donate Once" />
              </div>
              <div onClick={() => setDonationFrequency("Donate Monthly")}>
                <BaseButton label="Donate Monthly" />
              </div>
            </div>

            {/* <button
              value={"Donate Once"}
              onClick={() => setDonationFrequency("Donate Once")}
            >
              Donate Once
            </button>
            <button
              value={"Donate Monhly"}
              onClick={() => setDonationFrequency("Donate Monthly")}
            >
              Donate Monthly
            </button> */}
            <div className="flex">
              <BaseInput placeholder="Credit Card Number" />
              <BaseInput placeholder="MM/YY" />
              <BaseInput placeholder="CVV" />
            </div>
            <div>
              <BaseInput placeholder="Name of Cardholder" />
            </div>

            {/* <br />
            <input type="text" placeholder="Credit Card Number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Name of Cardholder" />
            <br /> */}
            {/* <button type="submit">
              Button
              <br />
              test-button
            </button> */}
            <BaseButton type="submit" label="Donate" colour="red" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
