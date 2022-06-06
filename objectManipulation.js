

// fetching data from data base

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// const y = obj;

// obj.e = 5;

// console.log(obj);

// console.log(y);

// const newObj = {...obj, e: 5};

// console.log(obj);
// console.log(newObj);
// user.name  = xyz

// this.setState({
//     user: {...user, name: "xyz"}
// })

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};


console.log(obj);

const {c, d, ...rest} = obj;

console.log(rest);

console.log(c);
console.log(d);


// const key = "d"

// console.log(a.a);
// console.log(a[key]);

// with(a)  {
//     console.log(b);
//     console.log(d);
//     console.log(a);
//     console.log(c);
// }

with(Math) {
    console.log(round(1.2));
}

console.log(Math.round(1.2));

// destruct
// const {c, b} = a;


// console.log(c);
// console.log(b);

// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 4
//         }
//     }
// }

// const a = 5;

// const {
//     a: objA,
//     b: {
//         c,
//         d: {
//             e
//         }
//     }
// } = obj;

// console.log(c);
// console.log(e);
// console.log(a);
// console.log(objA);






