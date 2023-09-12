import React from "react";
import "./App.css";
import img from "./assets/Tiger_pic.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
//import Container from "react-bootstrap/esm/Container";
//import Row from "react-bootstrap/esm/Row";
//import Col from "react-bootstrap/esm/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Hey</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src={img} alt="Tiger_pic.jpg" width="150" height="130" />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "2px",
                                width: "70%",
                                height: "100px",
                                backgroundColor: "red",
                                float: "left"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "2px",
                                width: "70%",
                                height: "100px",
                                backgroundColor: "red",
                                float: "right"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
