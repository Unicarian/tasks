import { Interface } from "readline";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";
import Q from "q";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter(
        (question: Question): boolean => question.published
    );
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (questions: Question): boolean =>
            questions.body.trim() !== "" ||
            questions.expected.trim() !== "" ||
            questions.options.length !== 0
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find(
        (questions: Question): Question | null =>
            questions.id === id ? questions : null
    );
    if (foundQuestion !== undefined) {
        return foundQuestion;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const newArray = questions.filter(
        (questions: Question): boolean => questions.id !== id
    );
    return newArray;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map(
        (questions: Question): string => questions.name
    );
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const points = questions.reduce(
        (currentSum: number, questions: Question): number =>
            currentSum + questions.points,
        0
    );
    return points;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const points = questions.reduce(
        (sum: number, questions: Question): number =>
            questions.published ? sum + questions.points : sum,
        0
    );
    return points;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const CSV = questions.map(
        (questions: Question): string =>
            questions.id +
            "," +
            questions.name +
            "," +
            questions.options.length +
            "," +
            questions.points +
            "," +
            questions.published
    );
    const CSV2 = CSV.join("\n");
    return "id,name,options,points,published\n" + CSV2;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (questions: Question): Answer => ({
            questionId: questions.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedQs = questions.map(
        (questions: Question): Question => ({
            ...questions,
            options: [...questions.options],
            published: true
        })
    );
    return publishedQs;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let baseType: string;
    if (questions.length > 0) {
        baseType = questions[0].type;
    }
    const QType = questions.every(
        (questions: Question): boolean => questions.type === baseType
    );
    return QType;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    const newArray = [...questions, newQuestion];
    return newArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const renamedQuestion = questions.map(
        (questions: Question): Question => ({
            ...questions,
            options: [...questions.options],
            name: questions.id === targetId ? newName : questions.name
        })
    );
    return renamedQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const reType = questions.map(
        (questions: Question): Question => ({
            ...questions,
            type: questions.id === targetId ? newQuestionType : questions.type,
            options:
                questions.id === targetId &&
                questions.type === "multiple_choice_question"
                    ? []
                    : [...questions.options]
        })
    );
    return reType;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const reOp = questions.map(
        (questions: Question): Question => ({
            ...questions,
            options: [...questions.options]
        })
    );
    const x = reOp.findIndex(
        (questions: Question): boolean => questions.id === targetId
    );
    targetOptionIndex === -1
        ? reOp[x].options.push(newOption)
        : reOp[x].options.splice(targetOptionIndex, 1, newOption);
    return reOp;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const dupleQ = questions.map(
        (questions: Question): Question => ({ ...questions })
    );
    const y = dupleQ.findIndex(
        (questions: Question): boolean => questions.id === targetId
    );
    const x = duplicateQuestion(newId, dupleQ[y]);
    dupleQ.splice(y + 1, 0, x);
    return dupleQ;
}
