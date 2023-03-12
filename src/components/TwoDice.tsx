import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, setdie1] = useState<number>(d6);
    const [die2, setdie2] = useState<number>(d6);
    <div>
        <span data-testid="left-die">
            <Button onClick={() => setdie1(d6)}>Roll Left</Button>
            <div>{die1}</div>
        </span>
        ;
        <span data-testid="right-die">
            <Button onClick={() => setdie2(d6)}>Roll Right</Button>
            <div>{die2}</div>
        </span>
        ;{die1 === die2 && <span>Lose/Win</span>}
    </div>;
    return <div>Two Dice</div>;
}
