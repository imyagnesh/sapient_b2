

class Auth {
    static #login() {
        // api call
        return new Promise((resolve, reject) => { 
            resolve("login success")
         })
    }

    static #logout() {
        // api call
        console.log("logged out")
    }

    static *authFlow() {
        try {
        yield Auth.#login();
        yield Auth.#logout();
    } catch (error) {
        console.log(error);    
    }
    }
}



const fn = async () => {
    try {
        const gen = Auth.authFlow();
        const res = gen.next();
        const loginRes = await res.value;
        if(loginRes === "login success") {
            gen.throw(new Error("something wrong"));
        }
    } catch (error) {
        
    }
}

fn()







// Auth.logout()


// function* xyz() {
//     try {
//         yield 1;
//         yield 2;
//         yield 3;
//         return "completed"
//     } catch (error) {
//             console.log(error);
//     }
// }

// const gen = xyz();

// console.log(gen.next());

// gen.throw(new Error("something wrong"))

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


