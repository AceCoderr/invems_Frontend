import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
