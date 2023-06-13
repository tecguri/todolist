import React from "react";
import './App.css';
import List from './Components/List';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="white.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            To Do List
          </Navbar.Brand>
        </Container>
      </Navbar>

      <List />
    </div>
  );
}

export default App;
