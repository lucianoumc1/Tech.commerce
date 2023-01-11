import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

interface Props {}

function App({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
}

export default App;
