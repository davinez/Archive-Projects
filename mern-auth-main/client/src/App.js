import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Navbar, Nav } from 'react-bootstrap';

import { authService } from './services/auth.service';
import AuthVerify from './services/auth.verify';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };

  return (
    <Container className="App" fluid>
      <Router>
        <Row>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
              Davinez
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>

                {showModeratorBoard && (
                  <Nav.Link as={Link} to="/mod">
                    Moderator Board
                  </Nav.Link>
                )}

                {showAdminBoard && (
                  <Nav.Link as={Link} to="/admin">
                    Admin Board
                  </Nav.Link>
                )}

                {currentUser && (
                  <Nav.Link as={Link} to="/user">
                    User
                  </Nav.Link>
                )}
              </Nav>

              {currentUser ? (
                <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/profile">
                    {currentUser.username}
                  </Nav.Link>
                  {/* We use href to get a window reload and update de navbar and states */}
                  <Nav.Link href="/login" onClick={logOut}>
                    LogOut
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>

                  <Nav.Link as={Link} to="/register">
                    Sign Up
                  </Nav.Link>
                </Nav>
              )}
            </Navbar.Collapse>
          </Navbar>
        </Row>

        <Row>
          <Switch>
            <Route exact path={['/', '/home']}>
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/user">
              <BoardUser />
            </Route>
            <Route exact path="/mod">
              <BoardModerator />
            </Route>
            <Route exact path="/admin">
              <BoardAdmin />
            </Route>
          </Switch>
          <AuthVerify logOut={logOut} />
        </Row>
      </Router>
    </Container>
  );
};

export default App;
