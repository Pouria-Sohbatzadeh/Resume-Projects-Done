// Before attempt
// The problem is that once dice becomes 1, The currentScore_0_Math or currentScore_1_Math  becomes 1 as well, And then the text content of
// currentScore_0 or currentScore_1 becomes 1 as well

// The problem lies with
    // // Adding the randomly generated number to the current score of player 0 or player 1
    // player_0.classList.contains(`player--active`) && dice_number !== 1 ? currentScore_0_Math += dice_number : currentScore_1_Math += dice_number

    // // Setting the value of currentScore_0_Math as the text content of currentScore_0 or currentScore_1
    // player_0.classList.contains(`player--active`) && dice_number !== 1 ? currentScore_0.textContent = currentScore_0_Math : currentScore_1.textContent = currentScore_1_Math
// The ? operator causes

// currentScore_0_Math += dice_number
// and then
// currentScore_0.textContent = currentScore_0_Math

// or

// currentScore_1_Math += dice_number
// and then
// currentScore_1.textContent = currentScore_1_Math

// To become activated, Since the conditions of 
// player_0.classList.contains(`player--active`) && dice_number !== 1
// aren't met


// After Attempt ; The problem now lies in the fact that
// player_0.classList.contains(`player--active`) ? player_0_1() : player_1_0()   
// isn't triggering 
'use strict';

// Don't forget the 4 steps of problem solving

// 1 : Write a code that once the player clicks on .btn--roll, It generates a number between 1 and 6 (.player--0 is always first thanks to .player--active)|Done

// 1.1 : Depending on the generated number, the src of .dice is changed to reflect the number, And if it's the first time that the player clicked .btn--roll, Then .dice 
// becomes visible|Done

// 1.2 : A number equivalent to the generated number is added to the #current--0 or #current--1 tag (Depending on which player has active--player).|Done

// 1.3 : Write a code so that if the player decides to hold their score, Then #current--0 or #current--1 (Depending on the player) is added score--0 or score--1 
// (Depending on the player), If their score--0 or score--1 is greater or equal to 100, That player wins (By giving that user the .player--winner class name), And the game
// is finished (They won't be able to click on .btn--roll and .btn--hold anymore) If not, the .player--active is taken from the current player, And given to other player

// 1.4 : Write a condition for the generated number, So that IF the generated number is 1, Then the #score--0 or #score--1 (Depending on which player rolled) is set back 
// to 0, And it becomes the turn of the other player to roll 

// The tag that shows the generated number
const dice = document.querySelector(`.dice`)

// Disappearing the tag on when the players have just started the game
dice.style.display = `none`

// The button tag that generates the number
const roll_button = document.querySelector(`.btn--roll`)

// player 0
const player_0 = document.querySelector(`.player--0`)

// Score of player 0
const score_0 = document.querySelector(`#score--0`)
// Setting the score of player 0 to 0
score_0.textContent = `0`

// Storing the text content of the score of player 0 in a variable for mathematic operations
var score_0_Math = Number(score_0.textContent)

// The current score of player 0
const currentScore_0 = document.querySelector(`#current--0`)
// Setting the current score of player 0 to 0
currentScore_0.textContent = `0`

// Storing the text content of the current score of player 0 in a variable for mathematic operations
var currentScore_0_Math = Number(currentScore_0.textContent)

// player 1
const player_1 = document.querySelector(`.player--1`)

// Score of player 1
const score_1 = document.querySelector(`#score--1`)
// Setting the score of player 1 to 0
score_1.textContent = `0`

// Storing the text content of the score of player 1 in a variable for mathematic operations
var score_1_Math = Number(score_1.textContent)

// The current score of player 1
const currentScore_1 = document.querySelector(`#current--1`)
// Setting the current score of player 1 to 0
currentScore_1.textContent = `0`

// Storing the text content of the current score of player 1 in a variable for mathematic operations
var currentScore_1_Math = Number(currentScore_1.textContent)


// Changing the active player from player 0 to player 1
function player_0_1(){
    // Taking the player--active from player 0
    player_0.classList.remove(`player--active`)

    // Changing the active player to player 1
    player_1.classList.add(`player--active`)
}

// Changing the active player from player 1 to player 0
function player_1_0(){
    // Taking the player--active from player 0
    player_1.classList.remove(`player--active`)

    // Changing the active player to player 1
    player_0.classList.add(`player--active`)
}


// Making it so that if the player clicks on roll_button, A number between 1 and 6 is generated and .dice is made visible
roll_button.addEventListener(`click`, function(){

    // Stopping our code, If a winner was found
    if(player_0.classList.contains(`player--winner`)||player_1.classList.contains(`player--winner`)){
        return;
    }

    // Generating a number between 1 and 6
    let dice_number = Math.trunc(Math.random() * 6 + 1)

    // Changing the display: value of .dice to so it appears once the player clicks  .roll_button
    dice.style.display = `inline`

    // Changing the src="" address of the dice so that it shows the image relevant to the generated number
    dice.src = `dice-${dice_number}.png`

    // Detemining which player is the one rolling (This bit of code might need Refactoring)
    // If .player--0 or player--1 is rolling and the number isn't 0
    if((player_0.classList.contains(`player--active`)||player_1.classList.contains(`player--active`)) && dice_number !== 1){
        
        // Adding the randomly generated number to the current score of player 0 or player 1
        player_0.classList.contains(`player--active`) ? currentScore_0_Math += dice_number : currentScore_1_Math += dice_number

        // Setting the value of currentScore_0_Math as the text content of currentScore_0 or currentScore_1
        player_0.classList.contains(`player--active`) ? currentScore_0.textContent = currentScore_0_Math : currentScore_1.textContent = currentScore_1_Math

    }  

    // If the number rolled was 1
    else if(dice_number === 1 && (player_0.classList.contains(`player--active`)||player_1.classList.contains(`player--active`))){

        // Setting the current score of player 0 or player 1 to 0
        player_0.classList.contains(`player--active`) ? currentScore_0.textContent = `0` :  currentScore_1.textContent = `0`

        // Setting the stored value of the math version of Player 0's or player_1's current score to 0, To prevent a bug
        player_0.classList.contains(`player--active`) ? currentScore_0_Math = 0 : currentScore_1_Math = 0

        // Taking the player--active from player 0 or player 1
        player_0.classList.contains(`player--active`) ? player_0_1() : player_1_0()        

    }
    

})


// The .btn--hold button
const hold_button = document.querySelector(`.btn--hold`)

// Clicking on the hold_button
hold_button.addEventListener(`click`, function(){

    // Stopping our code, If a winner was found
    if(player_0.classList.contains(`player--winner`)||player_1.classList.contains(`player--winner`)){
        return;
    }

    // If player 0 is the one pressing the one
    if(player_0.classList.contains(`player--active`)){

        // Adding the Math version of player 0's current score to the Math version of player 0's score
        score_0_Math += currentScore_0_Math

        // Setting score_0_Math as the the text content of score_0
        score_0.textContent = score_0_Math

        // If the score of player_0 is greater or equal to 100
        if(score_0_Math >= 100){
            player_0.classList.add(`player--winner`)

            player_0.classList.remove(`player--active`)

            return
        }

        // Setting the current score of player 0 to 0
        currentScore_0.textContent = `0`

        // Setting the stored value of the Math version of Player 0's current score to 0, To prevent a bug
        currentScore_0_Math = 0

        // Taking the player--active from player 0 and giving it to player_1
        player_0_1()

    }
    // If player 1 is the one pressing the one
    else if(player_1.classList.contains(`player--active`)){

        // Adding the Math version of player 0's current score to the Math version of player 0's score
        score_1_Math += currentScore_1_Math

        // Setting score_0_Math as the the text content of score_0
        score_1.textContent = score_1_Math

        // If the score of player_1 is greater or equal to 100
        if(score_1.textContent >= 100){
            player_1.classList.add(`player--winner`)

            player_1.classList.remove(`player--active`)

            return
        }

        // Setting the current score of player 0 to 0
        currentScore_1.textContent = `0`

        // Setting the stored value of the Math version of Player 0's current score to 0, To prevent a bug
        currentScore_1_Math = 0

        // Taking the player--active from player 1 and giving it to player_o
        player_1_0()

    }
    
})


// The button responsible for resetting the game (Everything must be above this code so JS can read it properly)
const reset = document.querySelector(`.btn--new`)

// Restting everything once the player clicks on the reset button (Must be below everything)
reset.addEventListener(`click`, function(){
    // Reseting the text content of score_0 to 0
    score_0.textContent = `0`

    // Resetting stored value of .score_0_Math to 0
    score_0_Math = 0

    // Resetting the txt content of currentScore_0 to 0
    currentScore_0.textContent = `0`

    // Resetting stored value of .currentScore_0_Math to 0
    currentScore_0_Math = 0

    // Reseting the text content of score_1 to 0
    score_1.textContent = `0`

    // Resetting stored value of .score_1_Math to 0
    score_1_Math = 0

    // Resetting the txt content of currentScore_1 to 0
    currentScore_1.textContent = `0`

    // Resetting stored value of .currentScore_1_Math to 0
    currentScore_1_Math = 0

    // If any of the players have won
    if(player_0.classList.contains(`player--winner`)||player_1.classList.contains(`player--winner`)){
        
        // Removing .player--winner from the players
        player_0.classList.contains(`player--winner`) ? player_0.classList.remove(`player--winner`) : player_1.classList.remove(`player--winner`)

    }

    // Giving player--active back to player_0
    player_0.classList.add(`player--active`)

})

// The Refactored hold button (Done)
hold_button.addEventListener(`click`, function(){

    // Stopping our code, If a winner was found
    if(player_0.classList.contains(`player--winner`)||player_1.classList.contains(`player--winner`)){
        return;
    }

    // If player 0 or player 1 is the one pressing the hold button, And the result of adding the current score to the overall score is smaller than 100
    if((player_0.classList.contains(`player--active`) && score_0_Math + currentScore_0_Math < 100) || 
    (player_1.classList.contains(`player--active`) && score_1_Math + currentScore_1_Math < 100)){

        // If player 0 pressed the hold button
        if(player_0.classList.contains(`player--active`) && score_0_Math + currentScore_0_Math < 100){
            // Adding the Math version of player 0's current score to the Math version of player 0's score
            score_0_Math += currentScore_0_Math

            // Setting score_0_Math as the the text content of score_0
            score_0.textContent = score_0_Math

            // Setting the current score of player 0 to 0
            currentScore_0.textContent = `0`

            // Setting the stored value of the Math version of Player 0's current score to 0, To prevent a bug
            currentScore_0_Math = 0

            // Taking the player--active from player 0 and giving it to player_1
            player_0_1()
        }
        // If player 1 pressed the hold button
        else {
            // Adding the Math version of player 0's current score to the Math version of player 0's score
            score_1_Math += currentScore_1_Math

            // Setting score_0_Math as the the text content of score_0
            score_1.textContent = score_1_Math

            // Setting the current score of player 0 to 0
            currentScore_1.textContent = `0`

            // Setting the stored value of the Math version of Player 0's current score to 0, To prevent a bug
            currentScore_1_Math = 0

            // Taking the player--active from player 1 and giving it to player_o
            player_1_0()
        }

    }
    // If player 0 or player 1 is the one pressing the hold button, But the result is equal or greater than 100
    else if(((score_0_Math + currentScore_0_Math >= 100 && player_0.classList.contains(`player--active`))|| 
    ((score_1_Math + currentScore_1_Math >= 100) && player_1.classList.contains(`player--active`)))){

        // If the score of player_0 is greater or equal to 100
        if(score_0_Math + currentScore_0_Math >= 100 && player_0.classList.contains(`player--active`)){
            // Adding the Math version of player 0's current score to the Math version of player 0's score
            score_0_Math += currentScore_0_Math

            // Setting score_0_Math as the the text content of score_0
            score_0.textContent = score_0_Math

            player_0.classList.add(`player--winner`)

            player_0.classList.remove(`player--active`)

            return
        }
        // If the score of player_1 is greater or equal to 100
        else {
            // Adding the Math version of player 0's current score to the Math version of player 0's score
            score_1_Math += currentScore_1_Math

            // Setting score_0_Math as the the text content of score_0
            score_1.textContent = score_1_Math

            player_1.classList.add(`player--winner`)

            player_1.classList.remove(`player--active`)

            return
        }

    }
    
})

// The Refactored roll dice button
roll_button.addEventListener(`click`, function(){

    // Stopping our code, If a winner was found
    if(player_0.classList.contains(`player--winner`)||player_1.classList.contains(`player--winner`)){
        return;
    }

    // Generating a number between 1 and 6
    let dice_number = Math.trunc(Math.random() * 6 + 1)

    // Changing the display: value of .dice to so it appears once the player clicks  .roll_button
    dice.style.display = `inline`

    // Changing the src="" address of the dice so that it shows the image relevant to the generated number
    dice.src = `dice-${dice_number}.png`

    // Detemining which player is the one rolling (This bit of code might need Refactoring)
    // If .player--0 or player--1 is rolling and the result isn't 1
    if((player_0.classList.contains(`player--active`)||player_1.classList.contains(`player--active`)) && dice_number !== 1){
        
        //  if player 0 is rolling
        if(player_0.classList.contains(`player--active`)){
            // Adding the randomly generated number to the current score of player 0
            currentScore_0_Math += dice_number

            // Setting the value of currentScore_0_Math as the text content of currentScore_0
            currentScore_0.textContent = currentScore_0_Math
        }
        //  if player 1 is rolling
        else {
            // Adding the randomly generated number to the current score of player 0
            currentScore_1_Math += dice_number

            // Setting the value of currentScore_0_Math as the text content of currentScore_0
            currentScore_1.textContent = currentScore_1_Math
        }

    }
    // If player 0 or player 1 rolls a 1
    else if(dice_number === 1 && (player_0.classList.contains(`player--active`)||player_1.classList.contains(`player--active`))){
        
        // if Player 0 rolled 1
        if(player_0.classList.contains(`player--active`)){
            // Taking the player--active from player 0
            player_0_1()

            // Setting the current score of player 0 to 0
            currentScore_0.textContent = `0`

            // Setting the stored value of the math version of Player 0's current score to 0, To prevent a bug
            currentScore_0_Math = 0
        }
        // If player 1 rolled 1
        else {
            // Taking the player--active from player 1
            player_1_0()

            // Setting the current score of player 1 to 0
            currentScore_1.textContent = `0`

            // Setting the stored value of the math version of Player 1's current score to 0, To prevent a bug
            currentScore_1_Math = 0
        }

    }

    

})