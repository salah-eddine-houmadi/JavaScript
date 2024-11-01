const set = new Set([1, 2, 2, 3, 3, 4]);

set.add(5);

console.log(set);

console.log(set.has(5));
console.log(set.has(6));

set.delete(5);

console.log(set);

const array = Array.from(set);

const arraySet = new Set(array);

console.log("Set Size:", set.size);

console.log(set.values());

for (let item of set) {
  console.log(item);
}

const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

set.clear();

console.log(set);
