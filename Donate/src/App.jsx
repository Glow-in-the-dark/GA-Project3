import { useEffect, useState } from "react";
import "./App.css";

function App() {
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

  return (
    <>
      <h1>YOUR DONATION MAKES A DIFFERENCE</h1>
      <p>
        With your support, we are able to provide meals and support services to
        those who are in need. Your <br /> donation ensures that no one goes
        hunrgy and that no one goes without the basic necessities of life.
      </p>
      <img src="#" />
      <h1>GIVE THE GIFT OF SUPPORT</h1>
      <p>See the impact of your donation</p>

      {/* // very useful! <form action=""></form> the action specifies where the form data is sent, value is a url */}

      <p>
        Every
        <select id="selection" onChange={handleSelectChange}>
          // IMPORTANT!!! option value is linked to event.target.value of handleSelectChange
          <option value="100">$100</option>
          <option value="20">$20</option>
          <option value="50">$50</option>
          <option value="200">$200</option>
        </select>
        donated provides {beneficiaries} with meals
      </p>
    </>
  );
}

export default App;
