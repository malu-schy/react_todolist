import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Row, Col, Container, Form, ListGroup, Group, Label, Control, Text } from 'react-bootstrap';


export default class ShowSingleItem extends React.Component {
    state = {
        todos: [],
        id: '',
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        axios.get(`http://localhost:5000/todolist/${event.target.value}`)
            .then(res => {
                const todos = res.data;
                this.setState({ todos });
                console.log(res.data);
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input placeholder="ID" type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <Button variant="primary" type="submit">SHOW</Button>
                    <ul>
                    {this.state.todos.map(todolist => <li>
                    <Row>
                       
                        <Col xs>
                            {todolist.description}
                        </Col>
                        <Col xs>
                            {todolist.duedate}
                        </Col>
                        <Col xs>
                            {todolist.priority}
                        </Col>
                    </Row>
                </li>)}
                    </ul>
                </form>
            </div>
        )
    }
}