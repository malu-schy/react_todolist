import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Toggle, Button, Row, Col, Form, ListGroup } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class AddTask extends React.Component {

    state = {
        description: '',
        duedate: '',
        priority: 'high'
    }

    handleChange = event => {
        this.setState({ description: event.target.value });
    }

    handleChange2 = event => {
        this.setState({ duedate: event.target.value });
    }

    handleChange3 = event => {
        this.setState({ priority: event.target.value });
    }


    handleSubmit = event => {
        // event.preventDefault();
        if(this.state.description === '' || this.state.description === ' '){
            alert("no Input :(");
        } else {
        axios.post(`http://localhost:5000/todolist`, {
            description: this.state.description,
            duedate: this.state.duedate,
            done: "false",
            priority: this.state.priority
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <input placeholder="descripe your task" type="text" description="description" onChange={this.handleChange} />
                                </Col>
                                <Col>
                                    <input type="date" duedate="duedate" onChange={this.handleChange2} />
                                </Col>
                                <Col>
                                    {/* <Dropdown priority="priority" onChange={this.handleChange3}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            Priority
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item value="high">high</Dropdown.Item>
                                            <Dropdown.Item value="medium">medium</Dropdown.Item>
                                            <Dropdown.Item value="low">low</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> */}

                                    <select priority="priority" onChange={this.handleChange3}>
                                        <option value="high">high</option>
                                        <option value="medium">medium</option>
                                        <option value="low">low</option>
                                    </select>
                                </Col>
                                <Col>
                                    <Button variant="success" type="submit">Add</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </label>
                </form>
            </div>
        )
    }
}
