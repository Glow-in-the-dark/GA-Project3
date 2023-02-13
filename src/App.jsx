import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./comp-NavBar/NavBar";
import CommonComponentExamples from "./comp-commons/examplePage/CommonComponentExamples";
import ContactUsPage from "./comp-contactUs/ContactUsPage";
import ContactFormConfirmationPage from "./comp-contactUs/ContactFormConfirmationPage";
import Homepage from "./comp-homepage/Homepage";
import AboutUsPage from "./comp-aboutUs/AboutUsPage";
import DonatePage from "./comp-donate/DonatePage";
import VolunteerMainPage from "./comp-volunteer/VolunteerMainPage";
import ProjectsPage from "./comp-aboutUs/ProjectsPage";
import NewsPage from "./comp-aboutUs/NewsPage";
import FaqPage from "./comp-aboutUs/FaqPage";
import LoginPage from "./comp-login/LoginPage";
import Dropdown from "./comp-NavBar/Dropdown";
import Volunteer from "./comp-volunteer/Volunteer";

function App() {
  return (
    <div>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerMainPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route
          path="/contact-us/confirmation-page"
          element={<ContactFormConfirmationPage />}
        />
      </Routes> */}

      <Volunteer />
    </div>
  );
}

export default App;
