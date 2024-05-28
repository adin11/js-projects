// Example of making request using fetch 

// fetch("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("Resolved", res)
//     return res.json()
//     .then((data)=>console.log("Json done ",data))

//     .catch((e)=> console.log("Error",e))
// })

//Same example of making requests using async fucntion ()

const goodNames = async () => {

    // First Request 

    try {
        const fetchedData = await fetch("https://swapi.dev/api/people/1/")
        const realData = await fetchedData.json()
        console.log(realData);

    } catch (error) {
        console.log("Here is Your Error :", error)
    }
    //Secong request 

    try {
        const fetchedData2 = await fetch("https://swapi.dev/api/people/4/")
        const realData2 = await fetchedData2.json()
        console.log(realData2)
    }
    catch (error) {
        console.log("Here is Your Error :", error);
    }

    // 3 rd Request 

    try {
        const fetchedData3 = await fetch("https://swapi.dev/api/people/6/")
        const realdata3 = await fetchedData3.json()
        console.log(realdata3);

    }
    catch (e) {
        console.log("Error", e);
    }


}

