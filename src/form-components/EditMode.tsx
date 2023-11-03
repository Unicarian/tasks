import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(e: React.ChangeEvent<HTMLInputElement>) {
        setMode(e.target.checked);
    }

    function updateName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function updateStudent(e: React.ChangeEvent<HTMLInputElement>) {
        setStudent(e.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label={mode ? "Disable Edit Mode" : "Enable Edit Mode"}
                checked={mode}
                onChange={updateMode}
            />
            {mode && (
                <div>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            disabled={!mode}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student"
                        checked={student}
                        onChange={updateStudent}
                        disabled={!mode}
                    />
                </div>
            )}
            {!mode && student && <div>{name} is a student</div>}
            {!mode && !student && <div>{name} is not a student</div>}
        </div>
    );
}
