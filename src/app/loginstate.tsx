"use client";

import React, { useState } from "react";
import FitHeader from "../components/header/header";
import Login from "./auth/login/page";

const HomePage = () => {
  console.log(HomePage);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <FitHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {!isLoggedIn && <Login onLogin={handleLogin} />}
    </div>
  );
};

export default HomePage;
