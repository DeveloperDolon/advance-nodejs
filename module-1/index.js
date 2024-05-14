

// module synchronous vs asynchronous
const fs = require("fs");

// const readText = fs.readFileSync("./read.txt", "utf-8"); // for writing file synchronous way
// console.log(readText);

// const writeText = fs.writeFileSync("./write.text", readText + "some extra");
// console.log(writeText)

//  asynchronous way
// fs.readFile("./read.txt", "utf-8", (err, data) => {
//     if(err) {
//         throw Error("Error reading text");
//     }
//     console.log(data);

//     fs.writeFile("./write.text", data, "utf-8", (err) => {
//         if(err) {
//             throw Error("Error to write text");
//         }
//     } )
// });

// console.log("testing the practise");


// node js event driven architecture learning ============<>============
const EventEmiter = require("events");
const myEmitter = new EventEmiter();

myEmitter.on("birthday", () => {
    console.log("Happy birthday to you.");
});
myEmitter.on("birthday", (gift) => {
    console.log("I will send a " + gift);
})
// myEmitter.emit("birthday", "Flower");


// stream and buffer learning ------------------<>------------------
const http = require("http");
// creating a server using raw node.js
// const server = http.createServer();

// // server listener
// server.on("request", (req, res) => {
//     console.log(req.url, req.method);

//     if(req.url === "/read-file" && req.method === "GET") {  // with this method data will be give to client chanke chanke😂
//         const readableStream = fs.createReadStream("./read.txt", ); // streamming file read

//         readableStream.on("data", (buff) => { // for start buffering data
//             res.write(buff);
//         });

//         readableStream.on("end", () => { // for end the request data
//             res.end("Data processing done!");
//         });

//          readableStream.on("error", (err) => {
                // res.statusCode = 500;
                // res.end("Something went wrong.");
//          })
//     }
// });


server.listen(5000, () => {
    console.log("Server is listening....")
})