export default function addCharAt(str: string, char: string, index: number) {

    return str.slice(0, index) + char + str.slice(index);
}