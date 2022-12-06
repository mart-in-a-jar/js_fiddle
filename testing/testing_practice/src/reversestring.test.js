import { reverseString } from "./reversestring";

describe("Reverse string tests", () => {
    test("String gets reversed", () => {
        expect(reverseString("abc")).toBe("cba");
        expect(reverseString("I will be reversed!")).toBe(
            "!desrever eb lliw I"
        );
        expect(reverseString("!desrever ma I")).toBe("I am reversed!");
    });
    test("Works on numbers", () => {
        expect(reverseString(123)).toBe("321");
    });
    test("Works on arrays", () => {
        expect(reverseString([1, 2, 3])).toBe("3,2,1");
    });
    test("Works on objects and functions", () => {
        expect(() => {
            reverseString({ a: 1 });
        }).not.toThrow();
        expect(() => {
            reverseString(() => {
                console.log("huh");
            });
        }).not.toThrow();
    });
});
