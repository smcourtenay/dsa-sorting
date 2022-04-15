function bubbleSort(arr) {
    for (let i in arr) {
        let unsortedLimit = arr.length - 1 - i;
        for (let j = 0; j < unsortedLimit; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;


// [3, 2, 1]