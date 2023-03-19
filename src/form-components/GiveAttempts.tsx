import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Remaining: {attempts}</span>
            <Form.Group controlId="formRequestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => setAttempts(attempts + requested)}
                disabled={requested <= 0 || Number.isNaN(requested)}
            >
                gain
            </Button>
        </div>
    );
}
