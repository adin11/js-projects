const conatiner = document.querySelector('#container') 

const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' 


for(let i = 1 ; i<152 ; i++){

    const newDiv = document.createElement('div')  // We Have created a new div and new span after the code below . 
    const newSpan = document.createElement('span') 
    newSpan.innerText = `#${i}` 


   const newImg = document.createElement('img')  //By writing this code we r done by displaying 151 pokemons by giving i as the index as the in the url if we change the no it changes the Pokemon . 
    newImg.src = `${baseUrl}${i}.png`    //Now what we want is to display the no as i below the image for reference. 
    
    
    newDiv.appendChild(newImg)  //We create a div append the img and span to it then we append it to the container Element .
    newDiv.appendChild(newSpan)


    conatiner.appendChild(newDiv) 
    
}

// <container>
 
//  <div>
//     <img></img>
//     <span></span>
//  </div>

// </container>