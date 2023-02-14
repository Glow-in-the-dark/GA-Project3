import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./comp-NavBar/NavBar";
import CommonComponentExamples from "./comp-commons/examplePage/CommonComponentExamples";
import ContactUsPage from "./comp-contactUs/ContactUsPage";
import ContactFormConfirmationPage from "./comp-contactUs/ContactFormConfirmationPage";
import Homepage from "./comp-homepage/Homepage";
import AboutUsPage from "./comp-aboutUs/AboutUsPage";
import DonatePage from "./comp-donate/DonatePage";
import DonationForm from "./comp-donate/DonationForm";
import VolunteerMainPage from "./comp-volunteer/VolunteerMainPage";
import ProjectsPage from "./comp-aboutUs/ProjectsPage";
import NewsPage from "./comp-aboutUs/NewsPage";
import FaqPage from "./comp-aboutUs/FaqPage";
import LoginPage from "./comp-login/LoginPage";
import ThankYouPage from "./comp-donate/ThankYouPage";
import TrainingKitchen from "./comp-kitchen/TrainingKitchen";

function App() {
  return (
    <div>
<TrainingKitchen/>
    </div>
  );
}

export default App;
