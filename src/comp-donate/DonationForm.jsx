import React, { useState, useRef } from "react";
import BaseButton from "../comp-commons/BaseButton";
import BaseInput from "../comp-commons/BaseInput";
import Footer from "../comp-commons/Footer";
import { NavLink } from "react-router-dom";

const DonationForm = () => {
  const [taxDeduction, setTaxDeduction] = useState(false);
  const [personaChoice, setPersonaChoice] = useState("persona");
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationFrequency, setDonationFrequency] = useState(null);
  const [particulars, setParticulars] = useState({});

  const [anonymous, setAnonymous] = useState(false);
  const [particularsName, setParticularsName] = useState("");
  const [particularsNRIC, setParticularsNRIC] = useState("");
  const [particularsMobile, setParticularsMobile] = useState("");
  const [particularsEmail, setParticularsEmail] = useState("");
  const [particularsAddress, setParticularsAddress] = useState("");

  const [data, setData] = useState({
    anonymous: anonymous,
    persona: personaChoice,
    taxDeduction: taxDeduction,
    particulars: particulars,
    donationAmount: donationAmount,
    donationFrequency: donationFrequency,
  });

  const [creditNumber, setCreditNumber] = useState(null);
  const [creditExpiry, setCreditExpiry] = useState("");
  const [creditCCV, setCreditCCV] = useState(null);
  const [creditName, setCreditName] = useState("");

  const [creditInfo, setCreditInfo] = useState({
    creditNumber: creditNumber,
    creditExpiry: creditExpiry,
    creditCCV: creditCCV,
    creditName: creditName,
  });

  const submitParticulars = () => {
    setParticulars({
      anonymous: anonymous,
      particularsName: particularsName,
      particularsNRIC: particularsNRIC,
      particularsMobile: particularsMobile,
      particularsEmail: particularsEmail,
      particularsAddress: particularsAddress,
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

  ///////////////////////////////////////////////////////////////

  // Functions to format credit card inputs
  // Function that removes any non-digits from string
  function clearNumber(value = "") {
    return value.replace(/\D+/g, "");
  }

  // Function to format credit card number input field
  function formatCreditCardNumber(value) {
    // If no value, return it
    if (!value) {
      return value;
    }
    // Remove non-digits
    const clearValue = clearNumber(value);

    // Splits into sections of 4
    let nextValue;
    nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
      4,
      8
    )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
    return nextValue.trim();
  }

  // Function to format credit card expiration date input field
  function formatExpirationDate(value) {
    // Remove non-digits
    const clearValue = clearNumber(value);

    // Split and include forward slash
    if (clearValue.length >= 3) {
      return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    }

    return clearValue;
  }

  ///////////////////////////////////////////////////////////////

  function handleChangeCredit(inputId, inputVal) {
    if (inputId === "credit-number") {
      setCreditNumber(formatCreditCardNumber(inputVal));
    }
    if (inputId === "credit-expiry") {
      setCreditExpiry(formatExpirationDate(inputVal));
    }
    if (inputId === "credit-CCV") {
      setCreditCCV(inputVal);
    }
    if (inputId === "credit-name") {
      setCreditName(inputVal);
    }
  }

  const submitDonationForm = (e) => {
    e.preventDefault();
    setData({
      persona: personaChoice,
      taxDeduction: taxDeduction,
      particulars: particulars,
      donationAmount: donationAmount,
      donationFrequency: donationFrequency,
    });
    setCreditInfo({
      creditNumber: creditNumber,
      creditExpiry: creditExpiry,
      creditCCV: creditCCV,
      creditName: creditName,
    });
  };

  return (
    <>
      {/* submitDonationForm submits the entire donation form */}
      <form onSubmit={submitDonationForm}>
        <div className="bg-secondary">
          <div className="text-center mb-10">
            <h1 className="text-5xl mb-4">
              YOUR SUPPORT CAN <br />
              CHANGE A LIFE
            </h1>

            <p className="text-xl">
              Every donation counts, support now. Your contribution can <br />{" "}
              make a world of difference in the lives of those in need.
            </p>
          </div>

          <section className="w-[996px] mx-auto bg-white py-12 pl-16 rounded-2xl">
            <h4 className="text-2xl">
              <img
                src="donateImages/number1.png"
                style={{ display: "inline" }}
                className="mr-2"
              />
              Select Individual/Corporate
            </h4>
            <p className="text-base mb-7 ml-10">
              We are an IPC registered charity, all monetary donations will be
              entitled to tax relief
            </p>

            <div>
              <div className="flex mb-7 ml-10">
                <div onClick={() => setPersonaChoice("Individual")}>
                  <BaseButton label="Individual" />
                </div>
                <div onClick={() => setPersonaChoice("Corporate")}>
                  <BaseButton label="Corporate" />
                </div>
              </div>
              <div className="mb-8 ml-10">
                <input
                  type="checkbox"
                  id="taxDeduct"
                  onClick={() => setTaxDeduction(!taxDeduction)}
                  className="mr-1"
                />
                <label htmlFor="taxDeduct">
                  I would like to receive tax relief for this donation
                </label>
              </div>

              <div className="ml-10">
                <BaseButton label="Continue" />
              </div>
            </div>
          </section>
          <br />

          {/* display taxDeduction form only when checkbox is ticked */}
          {taxDeduction && (
            <section className="w-[996px] mx-auto bg-white py-12 pl-16 rounded-2xl">
              <h4 className="text-2xl">
                <img
                  src="donateImages/number2.png"
                  style={{ display: "inline" }}
                  className="mr-2"
                />
                Enter Particulars
              </h4>
              <div className="mb-8 ml-10">
                <input
                  type="checkbox"
                  id="anonymous"
                  onClick={() => setAnonymous(!anonymous)}
                  className="mr-1"
                />
                <label htmlFor="anonymous">
                  I would like to receive tax relief for this donation
                </label>
              </div>
              <div className="mb-8 ml-10">
                <div style={{ display: "flex" }}>
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
                </div>
                <div style={{ display: "flex" }}>
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
                </div>
                <div style={{ display: "flex" }} className="mb-9">
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
              </div>
            </section>
          )}
          <br />

          <section className="w-[996px] mx-auto bg-white py-12 pl-16 rounded-2xl">
            <h4 className="text-2xl">
              <img
                src="donateImages/number3.png"
                style={{ display: "inline" }}
                className="mr-2"
              />
              Credit Card Payment
            </h4>
            <p className="text-base mb-7 ml-10">
              All transactions are secured and encrypted
            </p>
            <div className="flex flex-row mb-8 ml-10">
              <div onClick={() => setDonationAmount(10)} className="mr-3.5">
                <BaseButton label="$10" />
              </div>
              <div onClick={() => setDonationAmount(50)} className="mr-3.5">
                <BaseButton label="$50" />
              </div>
              <div onClick={() => setDonationAmount(100)} className="mr-3.5">
                <BaseButton label="$100" />
              </div>
              <div onClick={() => setDonationAmount(200)} className="mr-3.5">
                <BaseButton label="$200" />
              </div>
              <div>
                <BaseInput label="" />
              </div>
            </div>
            <div className="flex mb-8 ml-10">
              <div onClick={() => setDonationFrequency("Donate Once")}>
                <BaseButton label="Donate Once" />
              </div>
              <div onClick={() => setDonationFrequency("Donate Monthly")}>
                <BaseButton label="Donate Monthly" />
              </div>
            </div>
            <div className="mb-8 ml-10">
              <div className="flex space-x-5">
                <BaseInput
                  type="string"
                  id="credit-number"
                  value={creditNumber}
                  handleChange={handleChangeCredit}
                  required={true}
                  placeholder="Credit Card Number"
                  className=""
                />
                <BaseInput
                  type="string"
                  id="credit-expiry"
                  value={creditExpiry}
                  handleChange={handleChangeCredit}
                  required={true}
                  placeholder="MM/YY"
                  className=""
                />
                <BaseInput
                  type="string"
                  id="credit-CCV"
                  value={creditCCV}
                  handleChange={handleChangeCredit}
                  required={true}
                  placeholder="CCV"
                  className="w-1/3"
                />
              </div>

              <div>
                <BaseInput
                  type="string"
                  id="credit-name"
                  value={creditName}
                  handleChange={handleChangeCredit}
                  required={true}
                  placeholder="Name of Cardholder"
                  className="w-3/4"
                />
              </div>
            </div>
            <div className="mb-8 ml-10">
              <NavLink to="/thankyou">
                <BaseButton type="submit" label="Donate" colour="red" />
              </NavLink>
            </div>
          </section>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default DonationForm;
