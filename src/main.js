import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const root = document.getElementById("root");

createRoot(root).render(
  React.createElement(
    StrictMode,
    null,
    React.createElement(App)
  )
);

