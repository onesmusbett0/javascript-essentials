console.log("1. Start")
const middlePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2. Middle")
    }, 5000);
})
middlePromise.then((message) => {
    console.log(message)
    console.log("3. End")
})


