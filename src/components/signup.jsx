import react, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { app } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  let auth = getAuth();

  const [data, setData] = useState({});

  const handleChanage = (event) => {
    setData({ ...data, ...{ [event.target.name]: event.target.value } });
  };

  const handleSubmit = (event) => {
    if (data.password === data.confirmPassword) {
      event.preventDefault();
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          console.log(userCredential);
          alert("You're successfully Registered");
          window.location.href = "/home";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <>
      <Card className="p-2 mt-5 border-0">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
        </Card.Body>
      </Card>
      <Form onSubmit={handleSubmit}>
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
