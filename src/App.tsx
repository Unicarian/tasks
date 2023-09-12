import React from "react";
import "./App.css";
import img from "./assets/Tiger_pic.jpg";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <header> This is a header 2</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src={img} alt="Tiger_pic.jpg" width="150" height="130" />
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
