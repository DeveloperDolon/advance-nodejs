

// module synchronous vs asynchronous
const fs = require("fs");

const readText = fs.readFileSync("./read.txt", "utf-8"); // for writing file
console.log(readText);

const writeText = fs.writeFileSync("./write.text", readText + "some extra");
console.log(writeText)