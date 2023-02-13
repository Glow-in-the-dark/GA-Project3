import React from "react";
<<<<<<< Updated upstream
=======
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
import Dropdown from "./comp-NavBar/Dropdown";
import { Calendar } from "react-calendar";
import Volunteer from "./comp-volunteer/Volunteer";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <h2>GA SEI-41</h2>
=======
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
        <Route path="/faq" element={<FaqPage />} />
        <Route
          path="/contact-us/confirmation-page"
          element={<ContactFormConfirmationPage />}
        />
      </Routes> */}
      <Volunteer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
