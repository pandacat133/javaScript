function search(nameList, searchTerm) {
    let lowerCaseArray = [];
    let result = [];
    let lowerCaseSearch = searchTerm.toLowerCase();

    for(let i = 0; i < nameList.length; i++) {
        lowerCaseArray.push(nameList[i].toLowerCase());
    }

    for(let i = 0; i < lowerCaseArray.length; i++) {
        if(lowerCaseArray[i].match(lowerCaseSearch)) {
            result.push(lowerCaseArray[i].charAt(0).toUpperCase() + lowerCaseArray[i].substr(1));
        }
    }

    return result;
}