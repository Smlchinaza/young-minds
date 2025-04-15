import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import App from "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
