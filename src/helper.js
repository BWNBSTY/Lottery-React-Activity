function genRandomNumber(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sumArr(arr) {
    return arr.reduce((sum, curr) => sum + curr, 0);
}

export { genRandomNumber, sumArr };