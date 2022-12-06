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

// Compare until one array is empty, and just append whatever array is not empty
function mergeAlt(arr1, arr2) {
    const merged = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            merged.push(arr1.shift());
        } else {
            merged.push(arr2.shift());
        }
    }
    return merged.concat(arr1, arr2);
}

function mergeAlt2(arr1, arr2) {
    let i = 0, // arr1 iterator
        j = 0, // arr2 iterator
        k = 0; // result iterator
    const merged = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }
    for (i; i < arr1.length; i++) {
        merged[k++] = arr1[i];
    }
    for (j; j < arr2.length; j++) {
        merged[k++] = arr2[j];
    }
    // This will do the same as the above for loops:
    // return merged.concat(arr1.slice(i), arr2.slice(j));
    return merged;
}

console.log(mergeAlt2([1, 2, 3, 4, 5], [2, 3,7,8,9,100,1000,20000]));
