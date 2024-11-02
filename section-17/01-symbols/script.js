const sym1 = Symbol("sym1");
const sym2 = Symbol("sym2");

console.log(sym1, sym2);

console.log(Symbol("sym1").description);

console.log(Symbol("sym1") === Symbol("sym1"));
console.log(Symbol().description);

const user = {
  [Symbol("id")]: 1,
  name: "John",
  email: "john@gmail.com",
};

user.id = "123";

console.log(user);


console.log(user[Symbol("id")]); 

console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(user));

const sym3 = Symbol.for("foo");
const sym4 = Symbol.for("foo");

console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));

console.log(Symbol.keyFor(sym1));

console.log(sym1.toString());
console.log(sym3.toString());

console.log(sym1.valueOf());
console.log(sym3.valueOf());
