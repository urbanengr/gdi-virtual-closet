import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/pages/login/login.js';
import Home from './views/pages/home/home.js';
import Signup from './views/pages/signup/signup.js';

import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <main>
      <div className="App">

        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Virtual Closet</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;

