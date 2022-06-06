

const arr = [1,2,3,4,5,6];

const [...xyz] = arr;

console.log(xyz);

// console.log(arr[0]);
// console.log(arr[1]);

const index = 3;

const newArr = [
    ...arr.slice(0, index),
    8,
    ...arr.slice(index + 1)
];

console.log(newArr);


// const newArr = [0, ...arr, 7];

// console.log(newArr);

// arr.splice(3, 0, 8);

// console.log(arr);




// arr.unshift(0);

// console.log(arr);


// arr.shift();

// console.log(arr);




