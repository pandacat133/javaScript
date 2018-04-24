function firstDuplicate(array) {
    if (array.length === 1) {
        return -1;
    }

    let seen = {};

    for(let i = 0; i < array.length; i++) {
        let val = array[i];

        if(seen[val]) {
            return val;
        } else {
            seen[val] = true;
        }
    }
    return -1;
}