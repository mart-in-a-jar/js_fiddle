import { ceasarCipher } from "./ceasarCipher";

describe("Tests for Ceasar Cipher", () => {
    test("Invalid inputs", () => {
        expect(() => {
            ceasarCipher(456, "encipher");
        }).toThrow(Error("Invalid parameters"));
        expect(() => {
            ceasarCipher("abc", "EN");
        }).toThrow(Error("Invalid parameters"));
        expect(() => {
            ceasarCipher("abc", "encipher", "two");
        }).toThrow(Error("Invalid parameters"));
    });

    test("Encipher with uppercase and special character", () => {
        expect(ceasarCipher("Hello!", "encipher")).toBe("Ifmmp!");
    });

    test("Encipher with shift = 8", () => {
        expect(ceasarCipher("!Then I was dead? :(", "encipher", 8)).toBe(
            "!Bpmv Q eia lmil? :("
        );
    });

    test("Encipher with shift 568 is the same as shift 22", () => {
        expect(ceasarCipher("abc", "encipher", 568)).toBe(
            ceasarCipher("abc", "encipher", 22)
        );
    });

    test("Decipher", () => {
        expect(ceasarCipher("abc", "decipher")).toBe("zab");
        expect(ceasarCipher("!Bpmv Q eia lmil? :(", "decipher", 8)).toBe(
            "!Then I was dead? :("
        );
        expect(ceasarCipher("XYLOPHONE", "decipher", 2)).toBe("VWJMNFMLC");
    });
});
