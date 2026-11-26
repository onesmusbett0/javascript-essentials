const fetchFact = async()=>{
    try{
        const response = await fetch('https://api.api-ninjas.com/v1/factoftheday',
            {
                method:"GET",
                headers:{
                    "X-Api-Key":"mTjGtMU96VxwLyiR32zBtMtsXAyiAOzslcJSyPTg",
                    "Content-Type":"Application/json"
                },
            }
        )
        const data = await response.json()
        return data[0].fact;
    } catch (err) {
        return err;
    }
}

console.log(await fetchFact())


const fetchFactPromise = fetch("https://api.api-ninjas.com/v1/factoftheday", {
        method:"GET",
        headers:{
            'X-Api-Key':'mTjGtMU96VxwLyiR32zBtMtsXAyiAOzslcJSyPTg',
            'Content-Type':'Application/json'
        }
    })
    

fetchFactPromise
.then(response => response.json())
.then( data => console.log(data[0].fact))

