export default function formatAmount(amount: number): string {

    if (typeof amount !== "number") {

        throw new Error("Invalid type: amount must be a number!");
    }

    return Intl.NumberFormat().format(amount);
};