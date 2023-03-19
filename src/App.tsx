import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                React Hooks and TypeScript - CISC275
                <br /> Irvin Favors
            </header>
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
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
