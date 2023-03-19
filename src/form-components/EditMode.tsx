import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [inEditMode, setEditMode] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                inline
                type="switch"
                id="inEditMode"
                label="EditMode"
                checked={inEditMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEditMode(event.target.checked)
                }
            />
            {inEditMode ? (
                <Form.Group controlId="formGetName">
                    <Form.Label>Name: {name}</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                        disabled={!inEditMode}
                    />
                </Form.Group>
            ) : null}
            {inEditMode ? (
                <Form.Check
                    inline
                    type="checkbox"
                    id="isStudent"
                    label={`Is ${name} a student?`}
                    checked={isStudent}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setIsStudent(event.target.checked)
                    }
                    disabled={!inEditMode}
                />
            ) : null}
            <div>
                {isStudent ? `${name} is a student` : ""}
                {!isStudent ? `${name} is not a student` : ""}
            </div>
        </div>
    );
}
