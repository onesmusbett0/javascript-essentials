const balance = 10000;
console.log("1. Checking Balance")

const balanceCheck = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(balance > 10000) resolve("2. Enough Balance")
        else reject("2. Not enough balance");
    }, 2000);
})
// .then => when the promise is executed and resolved, 
//.catch => when promise is executed and rejected, 
//finally => runs regardless the promise is resolved or rejected
// pass in message to the calls which will be used in places or resolve or reject, its more like an object output rather than a function
balanceCheck.then(message=>{
    console.log(message);
    console.log("3. Transaction Finished")
}).catch(message => console.log(message))
.finally(() => console.log("Transcation closed!"))


