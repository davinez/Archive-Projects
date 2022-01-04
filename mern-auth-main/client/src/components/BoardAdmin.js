import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import { userService } from '../services/user.service';

const BoardAdmin = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    userService
      .getAdminBoard()
      // Success
      .then((response) => {
        setContent(response.data);
      })
      // Error
      .catch((error) => {
        const resMessage =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(resMessage);
      });
  }, []);

  return (
    <Col xs="10" md="4" className="mx-auto mt-4">
      <header className="bg-light p-5 rounded-lg m-3">
        <h3>{content}</h3>
      </header>
    </Col>
  );
};

export default BoardAdmin;
