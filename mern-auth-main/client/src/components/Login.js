import React, { useState } from 'react';
import { Col, Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { authService } from '../services/auth.service';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  // display error returned by the server
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage('');

    authService
      .login(form.username, form.password)
      // Success
      .then(() => {
        history.push('/profile');
        window.location.reload();
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

        setLoading(false);
        setMessage(resMessage);
      });
  };

  return (
    <Col xs="10" md="4" className="mx-auto mt-4">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={form.username}
            minLength="1"
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
            minLength="1"
            required
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" disabled={loading} type="submit">
          {loading ? 'Loading…' : 'Login'}
        </Button>

        {message && (
          <Form.Group className="mt-3">
            <Alert variant="danger">{message}</Alert>
          </Form.Group>
        )}
      </Form>
    </Col>
  );
};

export default Login;
