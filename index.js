
class Abc {
    constructor(name) {
        this.name = name;
    }

    printName = () => {
        return this.name
    }
}

const abc = new Abc();

console.log(abc.printName());