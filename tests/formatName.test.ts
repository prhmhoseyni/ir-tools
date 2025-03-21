import formatName from "../src/formatName"

describe("Format Name", () => {
    
    test("Test:", () => {

        expect(formatName("پرهام", "حسینی")).toBe("پرهام حسینی");
        expect(formatName("پرهام", null)).toBe("پرهام");
        expect(formatName(null, "پرهام")).toBe("پرهام");
        expect(formatName(null, undefined)).toBe("-");
    });
});