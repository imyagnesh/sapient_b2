

function* xyz() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = xyz();

for (const iterator of gen) {
    console.log(iterator);
}


// primitive type of data
const arr = [1,2,3,4, 6,5,6, 3]


console.log(arr);

const set = new Set(arr);


console.log(set);
console.log(set.has(5));

set.add(8);

set.delete(3);

console.log(set.size);

console.log(set);

set.forEach(item => {
    console.log(item)
})

for (const iterator of set) {
    console.log(iterator)
}


// O(logN)
// const index = arr.findIndex(x => {
//     console.log(x);
//     return x === 5
// })

// if(index !== -1) {
//     console.log("record found");
// }

