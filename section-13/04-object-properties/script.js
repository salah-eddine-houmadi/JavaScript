function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 20, 20);
const rect2 = new Rectangle("Rectangle 2", 20, 30);

console.log(rect1.name, rect2.width);
console.log(rect1["width"]);

rect1.color = "red";

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

delete rect2.perimeter;

console.log(rect2.hasOwnProperty("color"));
console.log(rect1.hasOwnProperty("color"));

console.log(Object.keys(rect1));

console.log(Object.values(rect2));

console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== "function") {
    console.log(`${key} - ${value}`);
  }
}
