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