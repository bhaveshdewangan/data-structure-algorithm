
// BINARY SEARCH
function binarySearchIterative(arr: any, key: number) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === key) {
            return mid
        } else if (arr[mid] > key) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1;
}

function binarySearchRecursive(arr, start, end, key) {
    if (start > end) {
        return -1;
    }
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
        return mid
    } else if (arr[mid] > key) {
        return binarySearchRecursive(arr, start, mid - 1, key)
    } else {
        return binarySearchRecursive(arr, mid + 1, end, key)
    }
}

// Que:  search a elememnt in infinte list
function searchInInfiniteList(arr, key) {
    let start = 0;
    let end = 1;
    while (arr[end] <= key) {
        if (arr[end] == key) {
            return end
        } else {
            start = end;
            end = 2 * end
        }
    }
    return binarySearchRecursive(arr, start, end, key)
}

// Que: Find the number of rotations in a circularly sorted array
function numberOfRotationInList(arr, key) {
    let start = 0, end = arr.length - 1, length = arr.length;
    if (arr[start] <= arr[end]) {
        return start
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[start] <= arr[end]) {
            return start
        }
        let next = (mid + 1) % length;
        let prev = (mid - 1 + length) % length;

        console.log("next ", next, " ", arr[next], "prev ", prev, " ", arr[prev], "mid ", mid, " ", arr[mid])
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid
        } else if (arr[start] > arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1
}

// console.log(binarySearchRecursive([1, 3, 4], 0, 2, 2, 1))
console.log("for array [6, 8, 10, 1, 3, 4] start index is ", numberOfRotationInList([6, 8, 10, 1, 3, 4], 9))
console.log("for array [8, 9, 10, 2, 5, 6] start index is ", numberOfRotationInList([8, 9, 10, 2, 5, 6], 9))
console.log("for array [2, 5, 6, 8, 9, 10] start index is ", numberOfRotationInList([2, 5, 6, 8, 9, 10], 9))
console.log("for array [4, 5, 6, 7, 0, 1, 2] start index is ", numberOfRotationInList([4, 5, 6, 7, 0, 1, 2], 9))


// Que:  search a elememnt in sorted and rotated array
function searchInSortedRatatedList(arr, key) {
    let start = 0, end = arr.length - 1;
    if (arr[start] < arr[end]) {
        return binarySearchRecursive(arr, start, end, key);
    }
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === key) {
            return mid
        }
        if (arr[start] > arr[mid]) {
            if (arr[mid] < key && arr[end] >= key) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        } else {
            if (arr[start] <= key && arr[mid] > key) {
                end = mid - 1
            } else {
                start = mid + 1;
            }
        }
    }

    return -1;
}

console.log("In array [6, 8, 10, 1, 3, 4] index of 8 is ", searchInSortedRatatedList([6, 8, 10, 1, 3, 4], 8))
console.log("In array [8, 9, 10, 2, 5, 6] inddex of 5 is ", searchInSortedRatatedList([8, 9, 10, 2, 5, 6], 5))
console.log("In array [2, 5, 6, 8, 9, 10] inddex of 2 is ", searchInSortedRatatedList([2, 5, 6, 8, 9, 10], 2))
console.log("In array [4, 5, 6, 7, 0, 1, 2] inddex of 2 is ", searchInSortedRatatedList([4, 5, 6, 7, 0, 1, 2], 2))
console.log("In array [4, 5, 6, 7, 0, 1, 2] inddex of 3 is ", searchInSortedRatatedList([4, 5, 6, 7, 0, 1, 2], 3))


// Que: Find first occurance of number
function findFirstAndLastOccuranceOfNumber(arr, key, occuranceOrder) {
    let start = 0, end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == key) {
            result = mid;
            if (occuranceOrder == 'first') {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else if (arr[mid] < key) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return result
}

// console.log(findFirstAndLastOccuranceOfNumber([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 5, 'first'),findFirstAndLastOccuranceOfNumber([2, 5, 5, 5, 6, 6, 8, 9, 9, 9], 5, 'last'))
