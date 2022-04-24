function Bird(name){
    this.name = name;
}

function Dog(name){
    this.name = name;
}

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);

Bird.prototype.numLegs = 2;
Dog.prototype.numLegs  = 4;

console.log(beagle.numLegs);

