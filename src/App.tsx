import { useState } from "react";
import AddProvider from "./context/calculateContext";
import "./App.css";
import CalculatorResult from "./components/calculatorResult";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <CalculatorResult />
    </div>
  );
}

export default App;
