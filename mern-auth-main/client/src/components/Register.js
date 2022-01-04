import React, { useState } from 'react';
import { Col, Form, Button, Alert } from 'react-bootstrap';

import { authService } from '../services/auth.service';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [successful, setSuccessful] = useState(true);
  // display error returned by the server
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);
    setMessage('');

    authService
      .register(form.username, form.email, form.password)
      // Success
      .then((response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      })
      // Error
      .catch((error) => {
        // posible error format return from server 'login'
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSuccessful(false);
        setMessage(resMessage);
      });
  };

  return (
    <Col xs="10" md="4" className="mx-auto mt-4">
      <Form onSubmit={handleRegister}>
        {successful && (
          <>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={form.username}
                minLength="3"
                maxLength="20"
                required
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                required
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                minLength="6"
                maxLength="25"
                required
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </>
        )}
        {message && (
          <Form.Group className="mt-3">
            <Alert variant={successful ? 'success' : 'danger'}>{message}</Alert>
          </Form.Group>
        )}
      </Form>
    </Col>
  );
};

export default Register;
