// https://javascript.info/recursion

// For loop

function fSumTo(n) {
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}

// Recursion
function sumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
}

// Arithmetic progression formula

function aSumTo(n) {
    return (n * (n + 1)) / 2;
}

///////

function factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

// SLOOOOOOOOOOOOOOOOOOOOOOW
// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

function fibonacci(n) {
    let sum = 0;
    let oldNum = 0;
    let newNum = 1;
    for (let i = 0; i < n; i++) {
        oldNum = newNum;
        newNum = sum;
        sum = newNum + oldNum;
    }
    return sum;
}

////////

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

//////

function reverseList(list) {
    if (list.next) {
        reverseList(list.next);
    }
    console.log(list.value);
}

function reverseList(list) {
    let tmp = list;
    const arr = [];
    while (tmp) {
        arr.unshift(tmp.value);
        tmp = tmp.next;
    }
    for (let a of arr) {
        console.log(a);
    }
}

/////////

function collatz(n, count) {
    if (!count) count = 0;
    if (n === 1) return count;
    else if (n % 2 === 0) {
        count++;
        return collatz(n / 2, count);
    } else {
        count++;
        return collatz(3 * n + 1, count);
    }
}

function collatz(n) {
    if (n === 1) return 0;
    else if (n % 2 === 0) {
        return 1 + collatz(n / 2);
    } else {
        return 1 + collatz(3 * n + 1);
    }
}

// console.log(collatz(50));
