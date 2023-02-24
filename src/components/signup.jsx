import react, { useState } from "react";
import reactDOM from "react-dom/client";
import { Form, Button, Container } from "react-bootstrap";

const Signup = () => {
  const [data, setData] = useState({});

  const handleChanage = (event) => {
    setData({ ...data, ...{ [event.target.name]: event.target.value } });
  };

  return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(event) => handleChanage(event)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="email"
            name="password"
            placeholder="Enter Password"
            onChange={(event) => handleChanage(event)}
          />
        </Form.Group>
      </Form>
  );
};

export default Signup;
