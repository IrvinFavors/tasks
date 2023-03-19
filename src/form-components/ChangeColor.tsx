import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "cyan",
    "purple",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((elementColor: string) => (
                <Form.Check
                    key={elementColor}
                    inline
                    type="radio"
                    name="colors"
                    onChange={() => setColor(elementColor)}
                    id="color-check-red"
                    label={elementColor}
                    value={elementColor}
                    checked={color === elementColor}
                    style={{ backgroundColor: elementColor }}
                />
            ))}

            <div>
                You have chosen
                <div
                    data-testid="colored-box"
                    style={{
                        width: "50px",
                        height: "25px",
                        backgroundColor: color,
                        display: "inline-block",
                        verticalAlign: "center",
                        marginLeft: "5px"
                    }}
                >
                    {color}
                </div>
                .
            </div>
        </div>
    );
}
