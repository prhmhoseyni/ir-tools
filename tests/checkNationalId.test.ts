import checkNationalId from "../src/checkNationalId"

describe("Check National Id", () => {
    
    test("Invalid National IDs:", () => {

        expect(checkNationalId("11")).toBe(false);
        expect(checkNationalId("1111111111")).toBe(false);
    });

    test("Valid National IDs:", () => {

        expect(checkNationalId("1050788818")).toBe(true);
        expect(checkNationalId("1062629213")).toBe(true);
        expect(checkNationalId("1060291118")).toBe(true);
    });
});