require("dotenv/config");
const App = require("./App");

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`API:${PORT}`);
});

import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"; //css global
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
