let userInput = document.querySelector('#inp')
let btn = document.querySelector('#btn-add')
let text = document.querySelector('.text')

btn.addEventListener('click', function () {
    let ToDoValues = userInput.value
    if (ToDoValues === '') {
        alert("Enter Your To-Do ")
    } else if (!isNaN(ToDoValues)) {
        alert("Don't Enter a number")
    } 
    else {
        let newUl = document.createElement('ul')
        newUl.innerHTML = `${ToDoValues}  <i class="fa-solid fa-trash"></i>`
        text.appendChild(newUl)
        userInput.value = ''

        let icon = document.querySelector('i')
        icon.addEventListener('click',function (){
            newUl.remove()   // Here We are removing ul by after clicking on the icon. ul.remove means we r removing the ul 
        })
       
        
    }
})

