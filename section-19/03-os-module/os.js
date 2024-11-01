const os = require("os");

console.log(os.arch());

console.log(os.platform());

if (os.platform() === "darwin") {
  console.log("You are on a Mac");
} else if (os.platform() === "win32") {
  console.log("You are on Windows");
} else {
  console.log("You are on Linux");
}

console.log(os.cpus());

console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

console.log(os.homedir());

console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(
  `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);

console.log(os.hostname());
