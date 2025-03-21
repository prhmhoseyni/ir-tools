export default function translateNumberToLetters(n: number) {

    const N_1_19 = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه", "ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"];
    const N_20_90 = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
    const N_100_900 = ["صد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"];
    const N_1000s = ["هزار", "میلیون", "میلیارد", "هزار میلیارد"];
    const AND = " و ";

    const isNegative = n < 0;
    n = Math.abs(n);

    let txt = "";

    for (let thousandsGroup = 1; thousandsGroup <= 5; thousandsGroup++) {

        const threeDigitNum = ((n % 1000 ** thousandsGroup) - (n % 1000 ** (thousandsGroup - 1))) / 1000 ** (thousandsGroup - 1);
        let threeDigitText = "";
        const sadganDigit = Math.floor(threeDigitNum / 100);
        const sadganText = N_100_900[sadganDigit - 1];
        const twoDigitNum = threeDigitNum % 100;

        if (twoDigitNum) {

            let twoDigitText = "";

            if (twoDigitNum < 20) {
                twoDigitText = N_1_19[twoDigitNum - 1];
            } else {
                const yekanDigit = twoDigitNum % 10;
                const dahganDigit = Math.floor(twoDigitNum / 10);
                const dahganText = N_20_90[dahganDigit - 2];
                if (yekanDigit) twoDigitText = dahganText + AND + N_1_19[yekanDigit - 1];
                else twoDigitText = dahganText;
            }

            if (sadganDigit) {
                threeDigitText = sadganText + AND + twoDigitText;
            } else {
                threeDigitText = twoDigitText;
            }

        } else if (sadganDigit) {
            threeDigitText = sadganText;
        }

        if (thousandsGroup > 1 && threeDigitText) {
            threeDigitText = threeDigitText + " " + N_1000s[thousandsGroup - 2];
        }

        if (threeDigitText && txt) {
            txt = threeDigitText + AND + txt;
        } else if (threeDigitText) {
            txt = threeDigitText;
        }
    }

    return isNegative ? "منفی " + txt : txt;
};