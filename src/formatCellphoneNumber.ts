import addCharAt from "./helpers/addCharAt";
import removeSpaces from "./helpers/removeSpaces";

export default function formatCellphoneNumber(input: string) {

    input = removeSpaces(input).slice(0, 11);

    input = addCharAt(input, " ", 4);
    input = addCharAt(input, " ", 8);

    return input;
}