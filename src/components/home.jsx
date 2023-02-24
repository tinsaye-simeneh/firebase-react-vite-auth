import React from "react";
import { Form, Card, Button } from "react-bootstrap";

const Home = () => {
    return (
        <>
        <h1>You'r successfully Loggedin</h1>
        <Button variant="primary" type="submit" className="w-100 mt-4" href="/signup">
          Logout
        </Button>
        </>
    );
    }

export default Home;