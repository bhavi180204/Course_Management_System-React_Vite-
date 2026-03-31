

import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import AuthContext from "../context/AuthContext";

let root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContext>
      <App />
      <Toaster />
    </AuthContext>
  </React.StrictMode>
);