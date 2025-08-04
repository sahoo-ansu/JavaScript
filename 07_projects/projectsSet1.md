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