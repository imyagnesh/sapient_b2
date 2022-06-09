const p1 = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { resolve("p1 resolved") }, 100)
     })
}

const p2 = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { resolve("p2 resolved") }, 200)
     })
}

const p3 = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { resolve("p3 resolved") }, 300)
     })
}

const arrayOfPromises = [
    p1(),
    p2(),
    p3(),
]

const fetchAny = async () => {
        try {
        console.time("async")
        for (let i = 0; i < arrayOfPromises.length; i++) {
            const res = await arrayOfPromises[i];
            console.log(res);
        }
        console.timeEnd("async")
    } catch (error) {
        console.log(error);
    }
}

fetchAny()