console.log("Welcome");

let taskOne = () => {
    return new Promise((resolve, reject) => {
        let value = true;

        if(value){
            resolve("Task 1");
        }
        else{
            reject("Null");
        }
    })
}

let taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let value = true;

            if(value){
                resolve("Task 2");
            }
            else{
                reject("Null");
            }
        }, 2000)
        
    })
}

let taskThree = () => {
    return new Promise((resolve, reject) => {
        let value = true;

        if(value){
            resolve("Task 3");
        }
        else{
            reject("Null");
        }
    })
}
/*
taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res) => console.log(res))
.catch((res) => console.log(res));
*/

let task = async () => {
    let t1 = await taskOne();
    console.log(t1);
    let t2 = await taskTwo();
    console.log(t2);
    let t3 = await taskThree();
    console.log(t3);
}

task();
console.log("End")


