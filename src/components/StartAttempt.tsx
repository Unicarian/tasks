import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [start, setStart] = useState<boolean>(false);
    function startClick(): void {
        setStart(true);
        setAttempts(attempts - 1);
    }

    const [attempts, setAttempts] = useState<number>(4);

    return (
        <div>
            Attempts {attempts + ":  "}
            <Button onClick={startClick} disabled={start || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setStart(false)} disabled={!start}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempts(attempts + 1)} disabled={start}>
                Mulligan
            </Button>
        </div>
    );
}
