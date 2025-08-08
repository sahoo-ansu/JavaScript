# Projects related to dom

## project link
 [click here](https://stackblitz.com/edit/dom-project-ansuman-nnwbu3k3?file=index.html)

 # Solution code
 ## project 1
 ``` javascript
 console.log('hii')

 const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
console.log(buttons)

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id
    }
  })
})

 ```

 ## project 2 solution

 ```javascript
 const form=document.querySelector('form')
console.log(form)

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height=parseFloat(document.querySelector('#height').value).toFixed(2)
  const weight=parseFloat(document.querySelector('#weight').value).toFixed(2)

  const results=document.querySelector('#results')

  console.log(height,weight)

  if(height=='' || height<=0 || isNaN(height)){
    const resText=document.createTextNode('please enter a valid height')
    results.appendChild(resText)
  }else if(weight=='' || weight<=0 || isNaN(weight)){
    const resText=document.createTextNode('please enter a valid weight')
    results.appendChild(resText)
  }else{
    const bmi= (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<18.6){
      const resText=document.createTextNode(`${bmi} - Under Weight`)
      results.appendChild(resText)
    }else if(bmi>=18.6 && bmi<=24.9){
      const resText=document.createTextNode(`${bmi} - Normal Range`)
      results.appendChild(resText)
    }else if(bmi>24.9){
      const resText=document.createTextNode(`${bmi} - UnderWeight`)
      results.appendChild(resText)
    }
    
  }
})
 ```

 ## project 3

 ```javascript
const clock=document.querySelector('#clock')

setInterval(()=>{
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)       //setInterval takes 2 parameter. one is a function, another is time in millisecond, function will execute per that time
 ```

 ## project 4
 ```javascript
 let randomNo=parseInt(Math.random()*100+1)

const submit=document.querySelector('#subt')
const userInput=document.querySelector('.guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=0

let playgame=true

if(playgame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a number more than 0')
  }else if(guess>100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess==10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNo}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess==randomNo){
    displayMessage('Congratulation!!! You guessed it right.')
    endGame()
  }else if(guess<randomNo){
    displayMessage('Number is too Low!!!')
  }else if(guess>randomNo){
    displayMessage('Number is too High!!!')
  }
}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML +=`${guess} `
  numGuess++
  remaining.innerHTML=`${10-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newgame" style="cursor: pointer;">Start new Game</h2>`
  startOver.appendChild(p)

  playgame=false
  newGame()
}

function newGame(){
  const newGameButton=document.querySelector('#newgame')
  newGameButton.addEventListener('click',(e)=>{
    randomNo=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=0
    guessSlot.innerHTML=''
    remaining.innerHTML=`${10-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    displayMessage('')

    playgame=true
  })
}
 ```

 ## project 6

 ```javascript
//generate a random color


const randomColor=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color +=hex[Math.floor(Math.random()*16)]
  }
  return color
}
let interValId;
const startChangingColor=function(){
  if(!interValId){
    interValId=setInterval(()=>{
      document.querySelector('body').style.backgroundColor=randomColor()
    },1000)
  }
}

const stopChangingColor=function(){
  clearInterval(interValId)
  interValId=null
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
 ```