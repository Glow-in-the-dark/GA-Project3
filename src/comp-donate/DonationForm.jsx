import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();
};

const DonationForm = () => {
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
        <div>
          <button>Individual</button>
          <button>Corporate</button>
          <button>Continue</button>
        </div>
        <div>
          <h4>Credit Card Payment</h4>
          <p>All transactions are secured and encrypted</p>
          <form action="" onSubmit={handleSubmit}>
            <button>$10</button>
            <button>$50</button>
            <button>$100</button>
            <button>$200</button>
            <button>...</button>
            <button>Donate Once</button>
            <button>Donate Monthly</button>
            <br />
            <input type="text" placeholder="Credit Card Number" />
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Name of Cardholder" />
            <br />
            <button type="submit">Donate</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonationForm;
