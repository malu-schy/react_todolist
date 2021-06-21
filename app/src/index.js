import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import TodoList from './TodoList'
// import Todo from './Todo';

//Array with example Todos
// const Todos = [
//   { id: "todo-0", name: "Get a sleep rhythm 🦥", completed: false },
//   { id: "todo-1", name: "Walk the Doggo 🐾", completed: false },
//   { id: "todo-2", name: "Drink more Water 💧", completed: false }
// ];


ReactDOM.render(
  <React.StrictMode>
    {/* <App tasks={Todos} /> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
