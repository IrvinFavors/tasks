import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎄" | "🍾" | "❤️" | "🎃" | "🦃";

const CYCLE_HOLIDAY: Record<Holiday, Holiday> = {
    "🍾": "❤️",
    "❤️": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🍾"
};

const CYCLE_HOLIDAY_ALPHABETICALLY: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🍾",
    "🍾": "🦃",
    "🦃": "❤️",
    "❤️": "🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🍾");
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={() => setHoliday(CYCLE_HOLIDAY[holiday])}>
                Advance by Year
            </Button>
            <Button
                onClick={() =>
                    setHoliday(CYCLE_HOLIDAY_ALPHABETICALLY[holiday])
                }
            >
                Advance by Alphabet
            </Button>
        </div>
    );
}
