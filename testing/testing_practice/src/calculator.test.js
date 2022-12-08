import { calculator } from "./calculator";

describe("Tests for calculator function", () => {
    describe("Addition tests", () => {
        test("Adding 2 and 5", () => {
            expect(calculator.add(2, 5)).toBe(7);
        });

        test("Adding -4 and -8", () => {
            expect(calculator.add(-4, -8)).toBe(-12);
        });
    });

    describe("Subtraction tests", () => {
        test("Subtract 9 from 50", () => {
            expect(calculator.subtract(50, 9)).toBe(41);
        });
        test("Subtract 50 from 9", () => {
            expect(calculator.subtract(9, 50)).toBe(-41);
        });
        test("Subtract -9 from -50", () => {
            expect(calculator.subtract(-50, -9)).toBe(-41);
        });
    });

    describe("Division tests", () => {
        test("7 / 5", () => {
            expect(calculator.divide(7, 5)).toBe(1.4);
        });
        test("5 / 7", () => {
            expect(calculator.divide(5, 7)).toBeCloseTo(0.71);
        });
        test("Divide by zero == Infinity", () => {
            expect(calculator.divide(8, 0)).toBe(Infinity);
        });
        test("0 / 5", () => {
            expect(calculator.divide(0, 5)).toBe(0);
        });
    });

    describe("Multiplication tests", () => {
        test("852 * 111", () => {
            expect(calculator.multiply(852, 111)).toBe(852 * 111);
        });
    });
});
