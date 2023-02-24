import react, { useState } from "react";
import { Form, Card, Button, Container } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
  const [data, setData] = useState({});

  const handleChanage = (event) => {
    setData({ ...data, ...{ [event.target.name]: event.target.value } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
       console.log(userCredential);
       alert("You'r successfully Loggedin");
       window.location.href = "/home";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Email or Password");
        console.log(errorCode, errorMessage);
    });
}

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
        <Button variant="primary" type="submit" className="w-100 mt-4">
          Login
        </Button>
      </Form>

      <p className="mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-decoration-none">
          Create an Account
        </a>
      </p>
    </>
  );
};

export default Login;
