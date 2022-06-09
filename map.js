
const users = [
    {
        name: "yagnesh",
        gender: "male",
        age: 33
    },
    {
        name: "virat",
        gender: "male",
        age: 30
    },
    {
        name: "rohit",
        gender: "male",
        age: 28
    },
    {
        name: "deepika",
        gender: "female",
        age: 25
    },
    {
        name: "alia",
        gender: "female",
        age: 18
    },
    {
        name: "priyanka",
        gender: "female",
        age: 40
    },
    {
        name: "taimur",
        gender: "male",
        age: 08
    }
];

// O(N)
const updatedUsers = users.map(item => {
    if(item.name === "rohit") {
        return {...item, age: 30}
    }
    return item;
});

console.log(updatedUsers);


// O(logN)
// const index = users.findIndex(x => x.name === "rohit");

// console.log(users[index]);

// const updatedUsers = [
//     ...users.slice(0, index),
//     {...users[index], age: 30},
//     ...users.slice(index + 1)
// ]

// console.log(updatedUsers);





const arr = [1,2,3,4,5,6,7];

// 


// const newArr = arr.map(item => {
//     if(item % 2 === 0) {
//         return item * 2;
//     } 
//     return item;
// });

// console.log(newArr);