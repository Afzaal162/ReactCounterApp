import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./counter"; // ✅ Make sure the file is Counter.js (capital C)

// Create the root only once
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
