import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext.js";
import CharmeFemininoPage from "./pages/CharmeFemininoPage.js";
import CompaniesPage from "./pages/CompaniesPage.js";
import HomePage from "./pages/HomePage.js"
import ServicePage from "./pages/ServicesPage.js";
import SignInPage from "./pages/SignInPage.js";
import SignUpPage from "./pages/SignUpPage.js";

export default function App() {
  const [user, setUser] = useState({})

  return (
    <>
      <BrowserRouter>
       <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/company" element={<CompaniesPage />} />
            <Route path="/charmeFeminino" element={<CharmeFemininoPage/>} />
            <Route path="/service" element={<ServicePage/>} />
          </Routes>
       </UserContext.Provider>  
      </BrowserRouter>
    </>
  );
}