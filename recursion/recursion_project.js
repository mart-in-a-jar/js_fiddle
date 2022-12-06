// FIBONACCI

function fibs(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

function fibs(n) {
    const fib = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) fib.push(i);
        else fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function fibsRec(n, fib = [0, 1]) {
    if (fib.length >= n) return fib.slice(0, n);
    return fibsRec(n, [...fib, fib.at(-1) + fib.at(-2)]);
}

function fibsRec(n) {
    switch (n) {
        case 0:
            return [];
            break;
        case 1:
            return [0];
            break;
        case 2:
            return [0, 1];
            break;
        default:
            return [
                ...fibsRec(n - 1),
                fibsRec(n - 1).at(-1) + fibsRec(n - 1).at(-2),
            ];
            break;
    }
}

// MERGE SORTING

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let rightSide = arr.splice(arr.length / 2);
    return merge(mergeSort(arr), mergeSort(rightSide));
}

function merge(arr1, arr2) {
    const merged = [];
    const items = arr1.length + arr2.length;
    for (let i = 0; i < items; i++) {
        if (!arr1[0]) {
            merged.push(arr2.shift());
        } else if (!arr2[0]) {
            merged.push(arr1.shift());
        } else if (arr1[0] < arr2[0]) {
            merged.push(arr1.shift());
        } else {
            merged.push(arr2.shift());
        }
    }
    return merged;
}

// console.log(mergeSort([5,2,100,70,55,9000,1,4,3,45,666]));