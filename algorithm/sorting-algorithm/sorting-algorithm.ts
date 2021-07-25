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
