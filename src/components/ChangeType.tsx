import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function flipType(): void {
        type === "short_answer_question"
            ? setType("multiple_choice_question")
            : setType("short_answer_question");
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {type === "short_answer_question" && <div>Short Answer</div>}
            {type === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
}
