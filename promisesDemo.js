const p1 = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { reject("p1 rejected") }, 100)
     })
}

const p2 = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { reject("p2 rejected") }, 200)
     })
}

const p3 = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { reject("p3 reject") }, 300)
     })
}

const fetchAny = async () => {
        try {
        console.time("async")
        const res = await Promise.any([
            p1(),
            p2(),
            p3(),
        ])
        console.log(res);
        console.timeEnd("async")
    } catch (error) {
        console.log(error);
    }
}

fetchAny()

// all
// allSettled
// race
// any

// const fetchPromises = async () => {
//     try {
//         console.time("sync")
//         const p1Res = await p1()
//         const p2Res = await p2()
//         const p3Res = await p3()
//         console.timeEnd("sync")
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchPromises()

// const fetchPromisesAsync = async () => {
//     try {
//         console.time("async")
//         const res = await Promise.all([
//             p1(),
//             p2(),
//             p3(),
//         ])
//         console.log(res);
//         console.timeEnd("async")
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchPromisesAsync()

// const fetchAllSettled = async () => {
//     try {
//         console.time("async")
//         const res = await Promise.allSettled([
//             p1(),
//             p2(),
//             p3(),
//         ])
//         console.log(res);
//         console.timeEnd("async")
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchAllSettled()