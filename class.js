

// const user1 = {
//     firstName: "yagnesh",
//     lastName: "modh",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const user2 = {
//     firstName: "yagnesh",
//     lastName: "modh",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// encapsulation
// abstraction
// polymorphism
// inheritance


// 

class User {
    isPermanent = false;
    // special methid
    // call only once when we create instance
    constructor (firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;

    }

    set firstName(value) {
        this._firstName = User.changeToUpperCase(value)
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._lastName = User.changeToUpperCase(value)
    }

    get lastName() {
        return this._lastName;
    }

    static changeToUpperCase(value) {
        return `${value[0].toUpperCase()}${value.slice(1)}`
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getInfo() {
        return {
            firstName: this.firstName,
            lastName:this.lastName,
            isPermanent: this.isPermanent,
            fullName: this.fullName()
        };
    }
}

class SuperUser extends User {
    constructor (props) {
        super("Almighty", "God")
    }

    changeName({ firstName, lastName }) {
        if(firstName) {
            this.#changeFirstName(firstName)
        }

        if(lastName) {
            this.#changeLastName(lastName)
        }
    }

    #changeFirstName(firstName) {
        this.firstName = firstName;
    }

    #changeLastName(lastName) {
        this.lastName = lastName;
    }

    getInfo() {
        const info = super.getInfo();
        
        return {
            ...info,
            isPermanent: true,
        }
    }
    
}

const su = new SuperUser()

console.log(su.getInfo());

const name = "rohit";

console.log(User.changeToUpperCase(name));





const user1 = new User("yagnesh", "modh");
const user2 = new User("Virat", "Kohli");

user1.changeName({ lastName: "modi" })
// user1.changeLastName("modi")

console.log(user1.firstName);
console.log(user1.lastName);

console.log(user1);
console.log(user2);

console.log(user1.fullName());
console.log(user2.fullName());










