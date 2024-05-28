let input = prompt('What would you like to do') // we used let here instead of const cuz we r re assigning the input over and over again . 
const todos = ['chicken wings', 'chicken Legpiece'] // we made an array to store the todos. 

while (input !== 'quit' && input !== 'q') {  //The user will be propmpted this , and if he enters quit or q (as mentioned in the while loop condition . the loop ends bcuz the condition becomes false and we get you got .... or if it doesnt put q or quit it will prompt again as inside the while loop we have the same thing.)

    if (input === 'list') {    // to implement logic in here , what happens when the user types list. first thing we are checking here is that the input entered by the user is ===list or not . 
        console.log('*********')

        // after printing this what we want to do is print out each todo from the array when the user inputs list . 
        // we also want the index so a for of loop wont work so we are using the for loop .

        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`)
        }
        console.log('********')

    } else if (input === 'new') {  // here we are implementing logic that what will happwn if the user inputs new . so else if is used , so in the while loop what happens is tht the (if statement is false) it will jump to the else if .

        const newtodo = prompt(' OK , what is you new todo ') // we r using const bcuz we r nly gonna the propmt the user to enter something one time . 

        // now after the user inputs somethng after the condition is true (i.e after entering 'new' )
        // We will take that result (which will be a string) and we will just add that on the todos array with the help of .push() which is an array method .

        todos.push(newtodo)-
        console.log(`${newtodo} : Added to the list`)  // to provide some basic feedback . f

    } else if (input === 'delete') {  // here we r again implementing logic that if the user enters 'delete' it should delete something . 

        const index = prompt('OK , Enter an index to delete ') // here we r asking the user by prompting to enter the index of what wants to be deleted . 

        // now we need to take that index(entered by the user) and somehow remove the element at that index.
        // We use the Splice Method to do that   

        const deleted = todos.splice(index, 1)
        // here we have used the splice method it will delete one term what the user wants to delete so that is why it is set to index , (as index is the variable name so the entered propmt will be stored there ) 1 
        console.log(`Ok so Deleted this ${deleted}`)
    }


    input = prompt('What would you like to do')
}

console.log('Ok You Got it ! Quit the app') 