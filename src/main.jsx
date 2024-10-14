import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "normalize.css"; //? normalizing styles
import "./index.css"; //? my general styles

createRoot(document.getElementById("root")).render(<App />);
