console.log("1. Start")
async function func1(){
    try{
        // await only works on promises, like fetch, for it to await, wrap everything in a new promise first
        const waitSeconds = new Promise(resolve => {
            setTimeout(() => {
               resolve("2. Middle")
           }, 5000);
        })
        await waitSeconds.then(message => console.log(message))
    } catch ( err ){
        console.log(err)
    } finally{console.log("3.End")}
}
func1()

//using async await



