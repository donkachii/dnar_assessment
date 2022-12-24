import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Charts from "./pages/charts/Charts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
