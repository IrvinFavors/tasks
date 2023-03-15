import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    function increaseAttempts(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            Current Attempts: <span>{attempts}</span>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setInProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <Button onClick={increaseAttempts} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
