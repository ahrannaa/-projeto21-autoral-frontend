import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext.js";
import AppointmentPage from "./pages/AppointmentPage.js";
import CharmeFemininoPage from "./pages/CharmeFemininoPage.js";
import CompaniesPage from "./pages/CompaniesPage.js";
import HomePage from "./pages/HomePage.js"
import SchedulePage from "./pages/SchedulePage.js";
import ServicePage from "./pages/ServicesPage.js";
import SignInPage from "./pages/SignInPage.js";
import SignUpPage from "./pages/SignUpPage.js";

export default function App() {
  const [user, setUser] = useState({})
  console.log(user);

  return (
    <>
      <BrowserRouter>
       <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/companies/:id/categories" element={<CharmeFemininoPage/>} />
            <Route path="/categories/:categoryId/service" element={<ServicePage/>} />
            <Route path="/schedule" element={<SchedulePage/>} />
            <Route path="/appointment" element={<AppointmentPage/>} />
          </Routes>
       </UserContext.Provider>  
      </BrowserRouter>
    </>
  );
}