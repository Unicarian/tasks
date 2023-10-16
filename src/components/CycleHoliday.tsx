/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Halloween");
    const HOLIDAY_EMOJIS: Record<string, string> = {
        "Halloween": "🎃",
        "Christmas": "🎄",
        "New Year's Day": "🎂",
        "Thanksgiving": "🦃",
        "St. Patrick's Day": "☘️"
    };

    function advByDate(): void {
        switch (holiday) {
        case "New Year's Day":
            setHoliday("St. Patrick's Day");
            break;
        case "St. Patrick's Day":
            setHoliday("Halloween");
            break;
        case "Halloween":
            setHoliday("Thanksgiving");
            break;
        case "Thanksgiving":
            setHoliday("Christmas");
            break;
        case "Christmas":
            setHoliday("New Year's Day");
            break;
        }
    }

    function advByName(): void {
        switch(holiday) {
        case "Christmas":
            setHoliday("Halloween");
            break;
        case "Halloween":
            setHoliday("New Year's Day");
            break;
        case "New Year's Day":
            setHoliday("St. Patrick's Day");
            break;
        case "St. Patrick's Day":
            setHoliday("Thanksgiving");
            break;
        case "Thanksgiving":
            setHoliday("Christmas");
            break;
        }
    }
    return (
        <div>
            Holiday: {HOLIDAY_EMOJIS[holiday]}
            <Button onClick={advByName}>Advance by Alphabet</Button>
            <Button onClick={advByDate}>Advance by Year</Button>
        </div>
    );
}
