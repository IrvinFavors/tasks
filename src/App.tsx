import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src="src/images/IMG-0061.jpg" alt="Lion Logo" />
                React Hooks and TypeScript - CISC275
                <br /> Irvin Favors
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>
            <h1>Testing List</h1>
            <ul>
                <li>N/A</li>
                <li>N/A</li>
                <li>N/A</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Counter></Counter>
            <RevealAnswer></RevealAnswer>
            <ChangeType></ChangeType>
            <StartAttempt></StartAttempt>
            <TwoDice></TwoDice>
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
