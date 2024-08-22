import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PostListProvider from "./store/facebook-store.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PostListProvider>
        <App />
      </PostListProvider>
    </BrowserRouter>
  </StrictMode>
);
