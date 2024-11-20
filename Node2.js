

let fs = require("fs");

fs.readFile("bankai.txt", "utf-8", (error, data) => {
    if(error){
        console.log("error");
    }
    else{
        console.log("Success");
        fs.writeFile("bankai2.txt", data, (error) => {
            if(error){
                console.log("Data transfer failed")
            }
            else{
                console.log("Data Transfer Successful")
            }
        })
    }
})


