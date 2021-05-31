let player = {
    name: 'Julio',
    chips: 200
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''
let displayMessage = document.querySelector('#message')
let displaySum = document.querySelector('#sum')
let displayCards = document.querySelector('#cards')
let getNewCard = document.querySelector('#new-card')
let displayPlayer = document.querySelector('.player')
let money = player.chips

displayPlayer.textContent = player.name + ': $' + money



function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackjack = false
    
    
    renderGame()
}

function renderGame(){
    display()
    
    if(sum < 21){
        message = "Do you want to draw a new card?"
     
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
       
        money += 20
        hasBlackjack = true
    }else{
        message =  "You lose!!!"

        money -= 20
        isAlive = false
    }
    displayMessage.textContent = message
    displayPlayer.textContent = player.name + ': $' + money
}

function newCard(){
    
    if(isAlive && hasBlackjack === false){
      
        let hit = getRandomCard()
        cards.push(hit)
        sum += hit
        renderGame()
    }
    
} 

function getRandomCard(){
    let num = Math.ceil(Math.random() * 10)
    if(num === 1){
        return 11
    }
    return num
}

function hold(){
    if(isAlive && hasBlackjack === false){
      
        deal()
        display()
        if(sum <= 21){
            message = 'You lose'
            money -= 20
            isAlive = false
        }else{
            message = 'You Win!!'
            money += 20
            hasBlackjack = true
        }
        displayMessage.textContent = message
        displayPlayer.textContent = player.name + ': $' + money
    }
}    

function deal(){
    let hit = getRandomCard()
    cards.push(hit)
    sum += hit
  
}

function display(){
    displayCards.textContent = 'Cards: '
    displaySum.textContent = 'Sum: ' + sum
    for(let i = 0; i < cards.length; i++){
        displayCards.textContent += cards[i] + ' '

    }
}