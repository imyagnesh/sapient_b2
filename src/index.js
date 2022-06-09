import { a } from './app'

import '../styles/index.css';

class Abc {
    constructor(name) {
        this.name = name;
    }

    printName = () => {
        return this.name
    }
}

const abc = new Abc();

console.log(a);

console.log("hello world")

console.log(abc.printName());