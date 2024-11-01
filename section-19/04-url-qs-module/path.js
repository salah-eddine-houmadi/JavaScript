const path = require("path");

const myFilePath = "subfolder/anotherfolder/index.js";

const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, ".js");

console.log(base2);

const ext = path.extname(myFilePath);
console.log(ext);

const dir = path.dirname(myFilePath);
console.log(dir);

const myPath = path.join("subfolder", "anotherfolder", "index.js");
console.log(myPath);

const myPath2 = path.resolve("subfolder", "anotherfolder", "index.js");
console.log(myPath2);

console.log(__dirname);

console.log(__filename);
