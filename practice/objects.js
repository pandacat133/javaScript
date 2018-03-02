//blueprint for a monster
let Monster = function(mname) {

    this.name = mname;
    this.health = 80;

    this.jump = function() {
        console.log('monster jumped');
    };
    this.crouch = function () {
        console.log('monster crouched')
    };

};


//creating an instance of the monster, named fred
let fred = new Monster('Fred');
fred.jump();


//creating a different instance of the monster, named bob
let bob = new Monster('Bob');
bob.crouch();


//reflection blueprint
let Reflector = function(obj) {
    this.getProperties = function(){
        let properties = [];
        for (let prop in obj) {
            if (typeof obj[prop]!='function') {
                properties.push(prop);
            }
        }
        return properties;
    };

    this.getMethods = function(){
        let methods = [];
        for (let meth in obj) {
            if (typeof obj[meth] === 'function') {
                methods.push(meth);
            }
        }
        return methods;
    };
};


//reflection instance
let mirror = new Reflector(fred);
console.log(mirror.getProperties());
console.log(mirror.getMethods());