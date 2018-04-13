function selectionSort(list) {
    let sortedIndex = 0;

    for (let i = 0; i < list.length; i++) {
        let min = list[i];
        let minIndex = i;

        for (let j = i; j< list.length; j++) {
            if (list[j] < min) {
                min = list[j];
                minIndex = j;
            }
        }

        if (list[sortedIndex] !== min) {
            let tmp = list[sortedIndex];
            list[sortedIndex] = min;
            list[minIndex] = tmp;
        }

        ++sortedIndex;
    }

    return list;
}