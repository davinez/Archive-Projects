import React from 'react';
import { Col } from 'react-bootstrap';

import { authService } from '../services/auth.service';

const Profile = () => {
  const currentUser = authService.getCurrentUser();

  return (
    <Col>
      <header className="bg-light p-5 rounded-lg m-3">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{' '}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </Col>
  );
};

export default Profile;
