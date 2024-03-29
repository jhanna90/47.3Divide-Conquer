function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // At this point, 'left' represents the index of the first occurrence of 0
    return arr.length - left;
}

module.exports = countZeroes