

// module synchronous vs asynchronous
const fs = require("fs");

// const readText = fs.readFileSync("./read.txt", "utf-8"); // for writing file synchronous way
// console.log(readText);

// const writeText = fs.writeFileSync("./write.text", readText + "some extra");
// console.log(writeText)

//  asynchronous way
fs.readFile("./read.txt", "utf-8", (err, data) => {
    if(err) {
        throw Error("Error reading text");
    }
    console.log(data);

    fs.writeFile("./write.text", data, "utf-8", (err) => {
        if(err) {
            throw Error("Error to write text");
        }
    } )
});

console.log("testing the practise");