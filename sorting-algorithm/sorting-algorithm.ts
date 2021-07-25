/*
    Selection Sort
    Time Complexity:
        Best: O(n2)
        Average: O(n2)
        Worst: O(n2)
*/
function selectionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[minIndex] > list[j]) {
                minIndex = j;
            }
        }
        //swap without new variable
        if (i != minIndex) {
            list[i] = list[i] + list[minIndex];
            list[minIndex] = list[i] - list[minIndex];
            list[i] = list[i] - list[minIndex];
        }
    }
    console.log(list);
}

/*
    Bubble Sort
    Time Complexity:
        Best: O(n)
        Average: O(n2)
        Worst: O(n2)
*/
function bubbleSort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1]
                list[j + 1] = temp
            }
        }
    }
    console.log(list);
}

/*
    Insertion Sort
    Time Complexity:
        Best: O(n)
        Average: O(n2)
        Worst: O(n2)
*/
function insertionSort(list) {
    for (let i = 1; i < list.length; i++) {
        let currIndexValue = list[i];
        let holeIndex = i

        while (holeIndex > 0 && list[holeIndex - 1] > currIndexValue) {
            list[holeIndex] = list[holeIndex - 1]
            holeIndex = holeIndex - 1;
        }
        list[holeIndex] = currIndexValue;
    }
    console.log(list);
}

/*
    Merge Sort
    Time Complexity:
        Best: O(nlogn)
        Average: O(nlogn)
        Worst: O(nlogn)
*/
function mergeSort(list) {
    if (list.length < 2) {
        return true;
    }
    let mid = Math.floor(list.length / 2);
    let leftList = [];
    let rightList = [];
    for (let i = 0; i < mid; i++) {
        leftList.push(list[i])
    }
    for (let j = mid; j < list.length; j++) {
        rightList.push(list[j])
    }
    mergeSort(leftList);
    mergeSort(rightList);
    mergeLists(leftList, rightList, list)
}
function mergeLists(left, right, list) {
    let length_left = left.length;
    let length_right = right.length;

    let i = 0, j = 0, k = 0;
    while (i < length_left && j < length_right) {
        if (left[i] > right[j]) {
            list[k] = right[j];
            k = k + 1;
            j = j + 1;
        } else {
            list[k] = left[i];
            k = k + 1;
            i = i + 1;
        }
    }
    while (i < length_left) {
        list[k] = left[i];
        k = k + 1;
        i = i + 1;
    }
    while (j < length_right) {
        list[k] = right[j];
        k = k + 1;
        j = j + 1;
    }
}

/*
    Quick Sort
    Time Complexity:
        Best: O(nlogn)
        Average: O(nlogn)
        Worst: O(n2)
*/
function quickSort(list, start, end) {
    if (start < end) {
        let pIndex = partitionIndex(list, start, end);
        quickSort(list, start, pIndex - 1);
        quickSort(list, pIndex + 1, end);
    }
}
function partitionIndex(list, start, end) {
    let pivot = list[end];
    let pIndex = start;

    for (let i = start; i < end; i++) {
        if (list[i] <= pivot) {
            let temp = list[i];
            list[i] = list[pIndex];
            list[pIndex] = temp;
            pIndex = pIndex + 1
        }
    }
    let temp = list[pIndex];
    list[pIndex] = pivot;
    list[end] = temp;
    console.log('PINDSEX', pIndex)
    return pIndex;
}
selectionSort([4, -3, 9, 6, 10, -1]);
bubbleSort([4, -3, 9, 6, 10, -1]);
insertionSort([4, -3, 9, 6, 10, -1]);
var list = [4, -3, 9, 6, 10, -1]
mergeSort(list);
console.log("SORTED LIST MERGE SORT", list)
var list_1 = [4, -3, 9, 6, 10, -1]
quickSort(list_1, 0, 5);
console.log("SORTED LIST QUICK SORT", list_1);


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
    let start = 0, end = arr.length - 1;
    if (arr[start] < arr[end]) {
        return start;
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (start == mid) {
            console.log("START =>", start, "END =>", end, "MID =>", mid)
            return end;
        } else if (arr[start] > arr[mid]) {
            end = mid;
        } else {
            start = mid;
        }
    }
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



