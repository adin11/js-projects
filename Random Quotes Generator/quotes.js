const quotes = document.querySelector('#quote')
const author = document.querySelector('#author')
const button = document.querySelector('#new-quote')

button.addEventListener('click', async function () {

    const fetchedData = await fetch("https://api.quotable.io/quotes/random")
    const realData = await fetchedData.json()

    console.log(realData);

    const ogContent = realData[0].content
    // console.log(ogContent);
    quotes.innerHTML = ogContent

    const ogAuthorName = realData[0].author
    author.innerHTML = ` ~ ${ogAuthorName}`
    // console.log(ogAuthorName);

  // To Generate a random color everytime some clicks the buttn to generate a new quote .
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    const newColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newColor


})

