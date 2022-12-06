import { capitalize } from "./capitalize";

describe("Capitalize tests", () => {
    it("Gets capitalized", () => {
        expect(capitalize("abc")).toBe("Abc");
    });

    test("Ignores numbers and other characters", () => {
        expect(capitalize("123")).toBe("123");
        expect(capitalize("£abc")).toBe("£abc");
    });

    test("Return unmodified if it is not a string", () => {
        expect(capitalize(2)).toStrictEqual(2);
        expect(capitalize({ a: 1, b: 2 })).toStrictEqual({ a: 1, b: 2 });
        expect(typeof capitalize(() => {
            console.log("huh")
        })).toBe("function")
    });
});
