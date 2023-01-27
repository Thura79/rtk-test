import React from "react";
import ReactDOM from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from "./App";
import { blogApi } from "./service/blogApi";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={blogApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);
