import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./ContactPage";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
