
const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')

const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

//After playing the game now we r adding the reset button 
const resetButton = document.querySelector('#reset')

const winningScoreSelect = document.querySelector('#playto')


//Now lets add the logic of wht we do 
// When We click on player1 we want totake the current score of player whtever the socre is and add(1) to it and update the 1st span to have tht Score
// So now we need to keep track of the current score for p1, we just created a variable set at 0 .
//So tht When we click we add 1 to p1score

let p1Score = 0;
let p2Score = 0;

let winningScore = 4; //This is what we are Playing to . 

//Now we need to keep track of is anybody gotten to tht Winning score or anoother way to sayins is tht the game is over or not .

let isGameOver = false;

p1button.addEventListener('click', function () {
    if (!isGameOver) {        // So if we are still playing the game well add 1 to player1 score.
        p1Score += 1       //So here once we Increment we dont want to wait until u clickagain and u go to 6 or 7 ,
//Then after adding we will check if it is equal to the winning score 
        if (p1Score === winningScore) {
            isGameOver = true;  //The reason we set isGameOver to true so tht if we click again the if condition becomes false.
        }
        p1Display.textContent = p1Score; //So it starts at 0 when we click on it , it adds 1 to the span element .
    }
})

//Now we Will Duplicate the logic for player 2 score
//They are joined by this isGameOver ,so if Either One of these gets to gameover first.
//If they achieve the winning score set by us ,isgameOver becomes true and the condtion becomes false .

p2button.addEventListener('click', function () {
    if (!isGameOver) {        // So if we are still playing the game well add 1 to player1 score.
        p2Score += 1       //So here once we Increment we dont want to wait until u clickagain and u go to 6 or 7 ,
//Then after adding we will check if it is equal to the winning score 
        if (p2Score === winningScore) {
            isGameOver = true;  //The reason we set isGameOver to true so tht if we click again the if condition becomes false.
        }
        p2Display.textContent = p2Score; //So it starts at 0 when we click on it , it adds 1 to the span element .
    }
})

resetButton.addEventListener('click',function(){  // This all will happen when we click the reset button . 
    
    isGameOver =false 
    p1Score = 0 ;
    p2Score = 0 ;

    p1Display.textContent =0 ;
    p2Display.textContent =0 ;

})

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value)

})