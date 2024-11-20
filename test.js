console.log("Welcome");

let taskOne = (callback) => {
    console.log("Task 1");
    callback();
}

let taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 2000)
}

let taskThree = (callback) => {
    setTimeout(() => {
        console.log("Task 3");
        callback();
    }, 1000)
}

let taskFour = () => {
    console.log("Task 4");
}

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour();
        })
    })
})

console.log("End")