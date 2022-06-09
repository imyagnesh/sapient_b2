

// javascript is single threaded sync language

const { resolve } = require("path");

// callback

// promises

// generator

// document.addEventListener("copy", () => {

// })


// console.log("s1");
// setTimeout(() => { console.log("a1") }, 1.1)
// console.log("s2");
// setTimeout(() => { console.log("a2") }, 1)
// console.log("s3");
// setTimeout(() => { console.log("a3") }, 500)

// p1().then(val => console.log(val))

const p1 = () => {
    
    return fetch('http://localhost:3000/todoList/4');
}

// write a code to display loader // pending stage
p1()
.then(val => {
    return val.json()
    // success stage
    console.log(val);
    // write code to display the data
})
.then(json => {
    console.log(json);
    return new Promise((resolve) => resolve("2nd then"))
})
.then(data => {
    console.log(data);
})
.catch(err => {
    // failure stage
    // write a code to display error message
    console.log(err);
})
.finally(() => {
    console.log("finally");
    // write a code to hide loader
})

