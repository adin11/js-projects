// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("Response is :", res);
//     })
//     .catch(e => {
//         console.log("Error is :", e);
//     })

// Same Example with Async Fucntion 

// const StarWarsApiEg = async () => {
//     try {
//         const onWait = await axios.get("https://swapi.dev/api/people/1/")
//         console.log("After Waiting :", onWait.data);

//     }
//     catch (e) {
//         console.log("After Waiting Error ", e);
//     }
// }

// Setting headers with axios example

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const getJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/",config )
        return res.data.joke
    } catch (e) {
        return "Erorr"
    }
}

const addNewJoke = async () => {

    const jokeText = await getJoke()
    console.log(jokeText);

    const newLi = document.createElement('Li')
    newLi.append(jokeText)
    jokes.append(newLi)


}


button.addEventListener('click', addNewJoke)