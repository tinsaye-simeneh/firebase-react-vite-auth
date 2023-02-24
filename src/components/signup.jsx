import react, { useState } from "react";
import reactDOM from "react-dom/client";
import { Form, Card, Button, Container } from "react-bootstrap";

const Signup = () => {
  const [data, setData] = useState({});

  const handleChanage = (event) => {
    setData({ ...data, ...{ [event.target.name]: event.target.value } });
  };

  return (
    <>
      <Card className="p-2 mt-5 border-0">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(event) => handleChanage(event)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mt-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(event) => handleChanage(event)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword" className="mt-4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(event) => handleChanage(event)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-4">
          Submit
        </Button>
      </Form>

      <p className="mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-decoration-none">
          Log In
        </a>
      </p>
    </>
  );
};

export default Signup;
