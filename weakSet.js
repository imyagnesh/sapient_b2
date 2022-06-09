
// cant iterate data
// only add object
const weakSet = new WeakSet();

const obj = {a: 1}

weakSet.add(obj);
weakSet.add(obj);

console.log(weakSet.has(obj)); 

weakSet.delete(obj);

console.log(weakSet.has(obj)); 