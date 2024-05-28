const btn = document.querySelector('button')
const h1 = document.querySelector('h1')


btn.addEventListener('click', function () {


   // To generate A random color (rbg) We need to generate 3 random nos 

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    // Now we have to build tht up in a new string

    const newColor = `rgb(${r},${g},${b})`

    //Now we will set the background color to the newColor itself 

    document.body.style.backgroundColor = newColor

    
    

    //Now we need to add the h1 to have the actual text of the colors .

    h1.innerText = newColor 

});


