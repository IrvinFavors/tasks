import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src="src/images/IMG-0061.jpg" alt="Lion Logo" />
                React Hooks and TypeScript
                <br /> Irvin Favors
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <b>Hello World</b>
            <h1>Sophmore Year Schedule</h1>

            <Container>
                <Row>
                    <Col>
                        <b>Fall 2022</b>
                        <div className="App">
                            <div>
                                <p>
                                    random text because having two lists fails.
                                </p>
                                <div className="rectangle-Red"></div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <b>Spring 2023</b>
                        <div className="App">
                            <div>
                                <ul>
                                    <li>CISC275</li>
                                    <li>CISC361</li>
                                    <li>MATH210</li>
                                    <li>POSC370</li>
                                    <li>CRJU110</li>
                                </ul>
                                <div className="rectangle-Red"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
