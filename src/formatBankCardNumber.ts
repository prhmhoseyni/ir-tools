import addCharAt from "./helpers/addCharAt";
import removeSpaces from "./helpers/removeSpaces";

export default function formatBankCardNumber(input: string) {

    input = removeSpaces(input).slice(0, 16);

    input = addCharAt(input, " ", 4);
    input = addCharAt(input, " ", 9);
    input = addCharAt(input, " ", 14);

    return input;
}