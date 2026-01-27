import React  from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./ndex.css";

import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
