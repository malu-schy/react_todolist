import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Row, Col, Container, Form, ListGroup, Group, Label, Control, Text } from 'react-bootstrap';


export default class DeleteTask extends React.Component{
    state = {
        id: '',
      }
    
      handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
 
        axios.delete(`http://localhost:5000/todolist/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input placeholder="id" type="text" name="id" onChange={this.handleChange} />
              </label>
              <Button variant="danger" type="submit">DELETE </Button>
            </form>
          </div>
        )
      }
}