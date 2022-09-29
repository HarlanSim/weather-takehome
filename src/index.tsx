import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";

const App = () => {
  return <Home />;
};

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<App />);
