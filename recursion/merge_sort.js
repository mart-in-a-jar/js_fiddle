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