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