const balance = 10000;
console.log("1. Checking Balance")

const balanceCheck = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(balance > 10000) resolve("2. Enough Balance")
        else reject("2. Not enough balance");
    }, 2000);
})

balanceCheck.then(message=>{
    console.log(message);
    console.log("3. Transaction Finished")
}).catch(message => console.log(message))
.finally(() => console.log("Transcation closed!"))
