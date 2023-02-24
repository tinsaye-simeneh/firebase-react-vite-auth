import React from "react";
import ReactDOM from "react-dom/client";
import Signup from "./components/signup";

const Main = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
