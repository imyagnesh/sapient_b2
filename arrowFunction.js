// functions are also hoisted with varibles


// console.log(add(1,2));

// named function
// function add(a, b) {
//     return a + b;
// }



// anonymous function
// const add = (a, b) => a + b;

const add = (a, b) =>  {
    console.log(this);
    return a + b;
}

const greet = name => `Hello, ${name}`;

console.log(add(1,2)); 

console.log(greet("yagnesh"));

const user = {
    firstName:"yagnesh",
    lastName: "modh ",
    fullName: () => {
        console.log("this", this);
        // return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.fullName());



// oops

// function

// arrow function

// function add() {
//     return "hackedd....."
// }

