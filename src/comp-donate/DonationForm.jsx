import React, { useState, useRef } from "react";


const DonationForm = () => {
  const [taxDeduction, setTaxDeduction] = useState(false);
  const [personaChoice, setPersonaChoice] = useState("persona");
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationFrequency, setDonationFrequency] = useState(null);
  const [particulars, setParticulars] = useState({});

  const particularsNameRef = useRef();
  const particularsNRICRef = useRef();
  const particularsMobileRef = useRef();
  const particularsEmailRef = useRef();
  const particularsAddressRef = useRef();

  const [data, setData] = useState({
    persona: personaChoice,
    taxDeduction: taxDeduction,
    particulars: particulars,
    donationAmount: donationAmount,
    donationFrequency: donationFrequency,
  });

  const submitParticulars = () => {
    setParticulars({
      particularsName: particularsNameRef.current.value,
      particularsNRIC: particularsNRICRef.current.value,
      particularsMobile: particularsMobileRef.current.value,
      particularsEmail: particularsEmailRef.current.value,
      particularsAddress: particularsAddressRef.current.value,
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

  return (
    <>
      <h1>YOUR SUPPORT CAN CHANGE A LIFE</h1>
      <p>
        Every donation counts, support now. Your contribution can make a world
        of difference in the lives of those in need.
      </p>
      <div>
        <h4>Select Individual/Corporate</h4>
        <p>
          We are an IPC registered charity, all monetary donations will be
          entitled to tax relief
        </p>

        {/* submitDonationForm submits the entire donation form */}
        <form onSubmit={submitDonationForm}>
          <div>
            <button onClick={() => setPersonaChoice("Individual")}>
              Individual
            </button>
            <button onClick={() => setPersonaChoice("Corporate")}>
              Corporate
            </button>
            <br />
            <input
              type="checkbox"
              name="taxDeduct"
              onClick={() => setTaxDeduction(!taxDeduction)}
            />
            <label htmlFor="taxDeduct">
              I would like to receive tax relief for this donation
            </label>
            <br />
            <button>Continue</button>
          </div>

          {/* display taxDeduction form only when checkbox is ticked */}
          {taxDeduction && (
            <div>
              <h4>Enter Particulars</h4>
              <div className="particulars-form">
                <input
                  type="text"
                  placeholder="Name*"
                  ref={particularsNameRef}
                />
                <input
                  type="text"
                  placeholder="NRIC/FIN Number"
                  ref={particularsNRICRef}
                />
                <input
                  type="text"
                  placeholder="Mobile Number*"
                  ref={particularsMobileRef}
                />
                <input
                  type="text"
                  placeholder="Email Address*"
                  ref={particularsEmailRef}
                />
                <input
                  type="text"
                  placeholder="Address"
                  ref={particularsAddressRef}
                />
                <button onClick={submitParticulars}>Continue</button>
              </div>
            </div>
          )}

          <div>
            <h4>Credit Card Payment</h4>
            <p>All transactions are secured and encrypted</p>

            <button onClick={() => setDonationAmount(10)}>$10</button>
            <button onClick={() => setDonationAmount(50)}>$50</button>
            <button onClick={() => setDonationAmount(100)}>$100</button>
            <button onClick={() => setDonationAmount(200)}>$200</button>
            <button>...</button>
            <button
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
            </button>
            <br />
            <input type="text" placeholder="Credit Card Number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Name of Cardholder" />
            <br />
            <button type="submit">
              Button
              <br />
              test-button
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DonationForm;
