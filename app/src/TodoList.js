import React from 'react'
import axios from 'axios';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { Table, Button, InputGroup, FormControl, Row, Col, Container, Form, ListGroup, Group, Label, Control, Text } from 'react-bootstrap';
import Confetti from "react-confetti";
import FigureImage from "react-bootstrap/esm/FigureImage";




export default class TodoList extends React.Component {
    state = {
        id: '',
        todos: [],
        done: 'false'
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/todolist`)
            .then(res => {
                const todos = res.data;
                this.setState({ todos });
                console.log(res.data);
            })
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
        alert("juhuu, you made it");
        console.log("entered handleChange");
        console.log(event.target.value);

        event.preventDefault();
        console.log("entered handleSubmit");
        axios.patch(`http://localhost:5000/todolist/${event.target.value}`,
            {
                done: 'true'
            },
            {
                // Config
            }
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            window.location.reload(false);
    }

    render() {

        return (
            <ul>
                <li>
                    <Row>
                        <Col xs>
                            DONE:
                    </Col>
                        <Col xs>
                            ID:
                    </Col>
                        <Col xs>
                            DESCRIPTION:
                    </Col>
                        <Col xs>
                            DUE DATE:
                    </Col>
                        <Col xs>
                            PRIORITY:
                    </Col>
                    </Row>
                </li>
                {this.state.todos.map(todolist => <li>
                    <Row>
                        <Col xs>
                            <form>
                                <input className="checkboxes" type="checkbox" name="id" value={todolist.id} onChange={this.handleChange} />
                                {todolist.done}
                            </form>
                        </Col>
                        <Col xs>
                            {todolist.id}
                        </Col>
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
        )
    }
}