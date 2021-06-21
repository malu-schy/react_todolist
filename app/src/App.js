import React, { useState, useRef, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./TodoList";
import { Container, ListGroup } from 'react-bootstrap';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';
import ShowSingleItem from './ShowSingleItem';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h3>✨ NEW TODO ✨ </h3>
          <div>
          </div>
          <AddTask/>
        </Container>
        <Container>
        <h3>✨ DELETE TODO ✨</h3>
        <DeleteTask/>
        </Container>
        <Container>
          <h3>✨ YOUR TODO LIST ✨</h3>
          <TodoList/>
        </Container>
         {/* <Container>
          <h3>SHOW SINGLE ITEM</h3>
          <ShowSingleItem/>
        </Container>  */}
      </header>
    </div>
  );
}
export default App;
