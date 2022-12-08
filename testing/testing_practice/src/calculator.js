const calculator = () => {
    const add = (x, y) => {
        return x + y;
    };

    const subtract = (x, y) => {
        return x - y;
    };

    const divide = (x, y) => {
        return x / y;
    };

    const multiply = (x, y) => {
        return x * y;
    };

    return { add, subtract, divide, multiply };
};

const calc = calculator();

export { calc as calculator };

let a = calc.divide(7, 0);
a;
