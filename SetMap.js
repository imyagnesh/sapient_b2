const map = new Map([["rohit", { name: "rihit"}]]);

map.set("yagnesh",  {
    name: "yagnesh",
    age: 33,
    gender: "male"
});

map.set("virat",  {
    name: "virat",
    age: 30,
    gender: "male"
});

console.log(map.get("virat"));

for (const [key,value] of map) {
    console.log(key);
    console.log(value);
}

