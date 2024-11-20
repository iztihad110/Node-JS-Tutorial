let fs = require("fs");
let http = require("http");

let port = 3000;
let host = '127.0.0.1';

let myServer = http.createServer((req, res) => {

    let handleReadFile = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (error, data) => {
            res.writeHead(statusCode, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    }

    if(req.url == "/"){
        handleReadFile(200, "./view/index.html");
    }
    else if(req.url == "/about"){
        handleReadFile(200, "./view/about.html");
    }
    else if(req.url == "/contact"){
        handleReadFile(200, "./view/contact.html");
    }
    else{
        handleReadFile(200, "./view/index.html")
    }
    
})

myServer.listen(port, host, () => {
    console.log(`The Server started at http://${host}:${port}`);
})