let Character = function() {
    this.name = 'Franky';
    this.health = 75;

    this.jump = function(){
        console.log('Monster jumped');
        $('.character').css('bottom', '150px');
    };

    this.crouch = function(){
        console.log('Monster crouched');
    };

    this.punch = function(){
        console.log('Monster punched');
    };
};

let Franken = new Character();

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

let mirror = new Reflector(Franken);
let mArray = mirror.getMethods();

for(let i = 0; i <mArray.length; i++) {
    $(".buttonbox").append("<a href='javascript: Franken." + mArray[i] +"()' class='mybtn'>"+ mArray[i] +"</a>");
}

$('#chealthbox').css('width', Franken.health + 'px');