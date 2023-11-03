import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<string>("");
    const request = parseInt(reqAttempts) || 0;

    function updateRequest(e: React.ChangeEvent<HTMLInputElement>) {
        setReqAttempts(e.target.value);
    }

    function addAttempts() {
        const x = attempts + request;
        setAttempts(x);
    }

    function useAttempts() {
        const x = attempts - 1;
        setAttempts(x);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button onClick={addAttempts}>gain</Button>
            <Button onClick={useAttempts} disabled={attempts < 1}>
                use
            </Button>
            <Form.Group controlId="formTextAttempts">
                <Form.Label> Attempts remaining: {attempts} </Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={updateRequest}
                />
            </Form.Group>
        </div>
    );
}
