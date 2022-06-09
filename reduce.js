const arr = [1,2,3,4,5,6];

let result = 0;

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result += element;
}

console.log(result);

// previous: output of previous iteration  -> default arr[0]
// current: value of current iteration
const sum = arr.reduce((p, c) => p + c, 0);


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
    },
    {
        name: "amitabh",
        gender: "male",
        age: 65
    }
];

const age = 32;

const ageGroup = Math.floor(32 / 10);
console.log(ageGroup);
const key = `${ageGroup}0-${ageGroup}9`;

console.log(key);


// {
//     "00-09": [],
//     "10-19": [],
//     "20-29": [],
//     "30-39": [],
//     "60-69": []
// }

// {
//     male: [],
//     female: []
// }

const groupByGender = users.reduce((p,c)=> {
    const ageGroup = Math.floor(c.age / 10);
    const key = `${ageGroup}0-${ageGroup}9`;
    if(!p[key]) {
        p[key] = []
    }
    p[key].push(c);
    return p;
}, {});

const groupBy = (arr, key) => {
    return arr.reduce((p,c)=> {
        if(!p[c[key]]) {
            p[c[key]] = []
        }
        p[c[key]].push(c);
        return p;
    }, {})
}

console.log(groupBy(users, 'gender'));

// const updatedUser = users.reduce((p, c) => {
//     if(c.name === "rohit") return [...p, {...c, age: 30}]
//     return [...p, c]
// }, []);

// console.log(updatedUser);


// find index of rohit
// O(N)
// const index = users.reduce((p, c, index) => {
//     console.log(p);
//     if(c.name === "rohit") {
//         return c;
//     }
//     return p;
// }, undefined);

// console.log(index);

// O(N)
const maleRecords = users.reduce((p, c) => {
    console.log(p, c);
    if(c.gender === "male") {
        return [...p, {...c, profession: "cricketer"}]
    }
    return p;
}, []);

console.log(maleRecords);


// findIndex
// find
// filter
// some
// every
// map

console.log(sum);