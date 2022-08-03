import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/userContext";
import App from "./App";
import Header from "./header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import SignIn from "./components/SignIn";
import Services from "./components/Services";
import SignOut from "./components/SignOut";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignOut" element={<SignOut />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
