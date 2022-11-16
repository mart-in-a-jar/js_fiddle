// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

function sumRange(n) {
    if (n === 1) return n;
    else return n + sumRange(n - 1);
}

function power(n, exp) {
    if (exp === 0) return 1;
    return n * power(n, exp - 1);
}

function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}

function all(array, callback) {
    let tmp = array.slice();
    if (tmp.length === 0) return true;
    if (callback(tmp[tmp.length - 1])) {
        tmp.pop();
        return all(tmp, callback);
    } else return false;
}

const arr = [1, 2, 3, 8];
function lessThanSeven(num) {
    return num < 7;
}

console.log("Less than seven? ", all(arr, lessThanSeven));

function product(arr) {
    let tmp = arr.slice();
    if (tmp.length === 0) {
        return 1;
    } else {
        return tmp.shift() * product(tmp);
    }
}

console.log(
    "Product reduce ",
    [1, 2, 3, 10].reduce(function (tot, n) {
        return tot * n;
    })
);

const nestedObject = {
    data: {
        klei: "foo",
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: "foo2",
                    },
                },
            },
        },
        new: "halle",
    },
    pew: 2,
};

// Funker ikke på verdier som kommer etter et objekt på samme nivå :/

function contains(obj, val) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            return contains(obj[key], val);
        }
        if (obj[key] === val) return true;
    }
    return false;
}

console.log("Object contains? ", contains(nestedObject, "halle"));

function totalIntegers(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    let ele = arr.shift();
    if (Number.isInteger(ele)) sum += 1;
    else if (Array.isArray(ele)) sum += totalIntegers(ele);
    return sum + totalIntegers(arr);
}

function totalIntegers(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i of arr) {
        if (Number.isInteger(i)) sum += 1;
        else if (Array.isArray(i)) sum += totalIntegers(i);
    }
    return sum;
}

console.log(
    "Total integers ",
    totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])
);

function sumSquares(input) {
    if (input.length === 0) return 0;
    let sum = 0;
    let ele = input.shift();
    if (typeof ele === "number") sum += ele * ele;
    else if (Array.isArray(ele)) {
        sum += sumSquares(ele);
    }
    return sum + sumSquares(input);
}

function sumSquares(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i of arr) {
        if (Array.isArray(i)) sum += sumSquares(i);
        else sum += i * i;
    }
    return sum;
}

console.log("Sum of squares ", sumSquares([10, [[10], 10], [10]]));

function replicate(times, num) {
    let arr = [];
    if (times > 0) {
        for (let i = 0; i < times; i++) {
            arr.push(num);
        }
    }
    return arr;
}

function replicate(times, num) {
    if (times <= 0) return [];
    return [num].concat(replicate(times - 1, num));
}

console.log("Replicate ", replicate(24, 8));