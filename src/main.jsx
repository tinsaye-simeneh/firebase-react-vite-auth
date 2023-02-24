import React from "react";
import ReactDOM from "react-dom/client";
import Signup from "./components/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="w-100 bg-primary" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
