/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
<<<<<<< HEAD
    if (numbers.length === 0) {
        return [];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
=======
    return numbers;
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
<<<<<<< HEAD
    const tripled = numbers.map((contents: number): number => contents * 3);
    return tripled;
=======
    return numbers;
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
<<<<<<< HEAD
    const strToInt = numbers.map((str: string): number =>
        Number.isNaN(Number(str)) ? 0 : Number(str)
    );
    return strToInt;
=======
    return [];
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
<<<<<<< HEAD
    const rmv$ = amounts.map((nmbr: string): string =>
        nmbr.charAt(0) === "$" ? nmbr.slice(1) : nmbr
    );
    const output = stringsToIntegers(rmv$);
    return output;
=======
    return [];
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
<<<<<<< HEAD
    const shout = messages.filter((sentences) => !sentences.endsWith("?"));
    const output = shout.map((sentences) =>
        sentences.endsWith("!") ? sentences.toUpperCase() : sentences
    );
    return output;
=======
    return [];
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
<<<<<<< HEAD
    const output = words.filter((sentences) => sentences.length < 4);
    return output.length;
=======
    return 0;
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
<<<<<<< HEAD
    if (colors.length === 0) {
        return true;
    }
    const allRGB = colors.every(
        (sentences: string) =>
            sentences === "red" || sentences === "blue" || sentences == "green"
    );
    return allRGB;
=======
    return false;
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
<<<<<<< HEAD
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const output = addends.join("+");
    return String(sum) + "=" + output;
=======
    return "";
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
<<<<<<< HEAD
    const output = [...values];
    if (values.some((item: number): boolean => item < 0)) {
        const index = values.findIndex((item: number): boolean => item < 0);
        const newValues = values.slice(0, index);
        const sum = newValues.reduce((a: number, b: number) => a + b, 0);
        output.splice(index + 1, 0, sum);
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        output.push(sum);
    }
    return output;
=======
    return [];
>>>>>>> 42791f487c86bbbc2bfeee3f1e4520a09b2f6c69
}
