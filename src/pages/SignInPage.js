import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import authAction from "../redux/actions/auth.action";

const SignInPage = () => {
  const dispatch = useDispatch();
  const [dataform, setDataform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setDataform({ ...dataform, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction.signin(dataform));
  };

  return (
    <Form className="signupForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleOnChange}
          value={dataform.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          value={dataform.password}
        />
      </Form.Group>

      <Button variant="outline-success" type="submit">
        Log in
      </Button>
    </Form>
  );
};

export default SignInPage;
