import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [correct, setCorrect] = useState<boolean>(false);

    function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
        e.target.value === expectedAnswer
            ? setCorrect(true)
            : setCorrect(false);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="">
                <Form.Label>
                    {correct && <span>✔️</span>} {!correct && <span>❌</span>}
                </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
        </div>
    );
}
