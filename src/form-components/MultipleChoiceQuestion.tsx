import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [guess, setGuess] = useState<string>(options[0]);

    function updateGuess(e: React.ChangeEvent<HTMLSelectElement>) {
        setGuess(e.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="options">
                <Form.Label></Form.Label>
                <Form.Select value={guess} onChange={updateGuess}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {guess === expectedAnswer && <div>✔️</div>}
            {guess !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
