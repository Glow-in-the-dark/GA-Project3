import React from "react";
import News from "./comp-aboutUs/News";
import CommonComponentExamples from "./comp-commons/examplePage/CommonComponentExamples";
import ContactUsPage from "./comp-contactUs/ContactUsPage";
import ContactFormConfirmationPage from "./comp-contactUs/ContactFormConfirmationPage";

function App() {
  return (
    <div>
      <News />
      {/* <h1>GA SEI 41</h1> */}
      {/* <CommonComponentExamples /> */}
      {/* <ContactUsPage /> */}
      <ContactFormConfirmationPage />
    </div>
  );
}

export default App;
