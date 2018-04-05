class Dictionary {

    constructor() {
        this.dataStore = {};

        this.add = function(key, value) {
            this.dataStore[key] = value;
        };

        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
    }
}

function find() {
    let myValue = $('.searchBox').val();
    $('.result').html(this.dataStore[myValue]);
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for(let key in this.dataStore) {
        console.log(key + ' -> ' + this.dataStore[key]);
    }
}

let phoneBook = new Dictionary();

phoneBook.add('Fred', '123');
phoneBook.add('Lyle', '533');
phoneBook.add('Trent', '829');
phoneBook.add('Sally', '432');
phoneBook.add('Jack', '234');
phoneBook.add('Amanda', '345');
phoneBook.add('Jason', '374');
phoneBook.add('Chrissy', '243');

// phoneBook.showAll();
//
// phoneBook.find('Fred');
// phoneBook.remove('Trent');
// phoneBook.showAll();