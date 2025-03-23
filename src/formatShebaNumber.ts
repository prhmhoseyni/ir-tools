import addCharAt from "./helpers/addCharAt";
import removeSpaces from "./helpers/removeSpaces";

export default function formatShebaNumber(input: string) {

    input = removeSpaces(input).slice(0, 24);

    input = addCharAt(input, " ", 2);
    input = addCharAt(input, " ", 7);
    input = addCharAt(input, " ", 12);
    input = addCharAt(input, " ", 17);
    input = addCharAt(input, " ", 22);
    input = addCharAt(input, " ", 27);

    return input;
}