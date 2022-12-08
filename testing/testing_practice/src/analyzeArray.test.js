import { analyzeArray } from "./analyzeArray";

describe("Tests for analyzeArray", () => {
    test("Positive numbers", () => {
        expect(analyzeArray([1, 2, 3, 4])).toMatchObject({
            average: 2.5,
            min: 1,
            max: 4,
            length: 4,
        });
    });
    test("Negative and positive numbers and decimals", () => {
        let result = analyzeArray([-5, -456, -1001, -5.5, 8.3]);
        expect(result.average).toBeCloseTo(-291.84);
        expect(result.min).toBe(-1001);
        expect(result.max).toBe(8.3);
        expect(result.length).toBe(5);
    });
});
