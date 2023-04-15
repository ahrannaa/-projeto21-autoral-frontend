import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharmeFemininoPage from "./pages/CharmeFemininoPage.js";
import CompaniesPage from "./pages/CompaniesPage.js";
import HomePage from "./pages/HomePage.js"
import ServicePage from "./pages/ServicesPage.js";
import SignInPage from "./pages/SignInPage.js";
import SignUpPage from "./pages/SignUpPage.js";

export default function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/company" element={<CompaniesPage />} />
            <Route path="/charmeFeminino" element={<CharmeFemininoPage/>} />
            <Route path="/service" element={<ServicePage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}