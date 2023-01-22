import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import AddProvider from "./context/calculateContext";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AddProvider>
      <ToastContainer
      />
      <App />
    </AddProvider>
  </React.StrictMode>
);
