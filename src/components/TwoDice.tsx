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
    const [left, setLeft] = useState<number>(0);
    const [right, setRight] = useState<number>(5);
    return (
        <div>
            <p>
                <span data-testid="left-die">Left: {left} </span>
                <span data-testid="right-die">Right: {right} </span>
            </p>
            <p>
                {left === right && left === 1 && <span>Lose</span>}
                {left === right && left > 1 && <span>Win</span>}
            </p>
            {left !== right && (
                <Button onClick={() => setLeft(d6)}>Roll Left</Button>
            )}
            {left !== right && (
                <Button onClick={() => setRight(d6)}>Roll Right</Button>
            )}
        </div>
    );
}
