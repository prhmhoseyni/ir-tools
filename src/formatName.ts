export default function formatName(firstName: string | undefined | null, lastName: string | undefined | null): string {

    if (firstName || lastName) {

        return ((firstName ?? "").trim() + " " + (lastName ?? "").trim()).trim();
    }

    return "-";
}