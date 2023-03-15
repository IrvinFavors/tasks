import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Christmas"
    | "Thanksgiving"
    | "Halloween"
    | "New Year's"
    | "Valentine's"
    | "🎄"
    | "🍾"
    | "❤️"
    | "🎃"
    | "🦃";

const CYCLE_HOLIDAY: Record<Holiday, Holiday> = {
    "🍾": "❤️",
    "❤️" : "🎃",
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
    return <div>Cycle Holiday</div>;
}

export function CycleHolidayAlphabetically(): JSX.Element {
    return <div>Cycle Holiday Alphabetically</div>;
}
