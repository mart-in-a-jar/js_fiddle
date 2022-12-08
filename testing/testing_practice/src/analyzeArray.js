function analyzeArray(arr) {
    const length = arr.length;
    const average =
        arr.reduce((a, b) => {
            return a + b;
        }) / arr.length;
    const min = arr.reduce((a, b) => {
        if (a > b) return b;
        else return a;
    });
    const max = arr.reduce((a, b) => {
        if (a > b) return a;
        else return b;
    });

    return {
        average,
        min,
        max,
        length,
    };
}

export { analyzeArray };
