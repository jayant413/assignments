class Animal {
    constructor(name, speaks) {
        this.name = name;
        this.speaks = speaks;
    }

    static thisIsAnimal() {
        console.log("This is animal class")
    }

    speak() {
        console.log("This animal name is " + this.name + " and it speaks as " + this.speaks)
    }
}

let dog = new Animal("Rocky", "Bhow Bhow");

dog.speak();
Animal.thisIsAnimal();