import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./comp-NavBar/NavBar";
import CommonComponentExamples from "./comp-commons/examplePage/CommonComponentExamples";
import ContactUsPage from "./comp-contactUs/ContactUsPage";
import ContactFormConfirmationPage from "./comp-contactUs/ContactFormConfirmationPage";
import Homepage from "./comp-homepage/Homepage";
import AboutUsPage from "./comp-aboutUs/AboutUsPage";
import DonatePage from "./comp-donate/DonatePage";
// import VolunteerMainPage from "./comp-volunteer/VolunteerMainPage";
import Projects from "./comp-aboutUs/Projects";
import News from "./comp-aboutUs/News";
import Faq from "./comp-aboutUs/Faq";
import Dropdown from "./comp-NavBar/Dropdown";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        {/* <Route path="/volunteer" element={<VolunteerMainPage />} /> */}
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<Faq />} />
        {/* <CommonComponentExamples />
        <ContactFormConfirmationPage /> */}
      </Routes>
    </div>
  );
}

export default App;
