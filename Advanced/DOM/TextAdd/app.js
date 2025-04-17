const menu=document.querySelector('#menu')

const div = document.createElement('div');
div.id = 'content'
div.className='note'

const h1 = document.createElement('h1')
h1.textContent = 'This is heading 1 tag coming from JS DOM'
div.appendChild(h1)
document.body.appendChild(div)
let li=document.createElement('li')  // create element
li.innerHTML = 'About US' // added text
menu.appendChild(li) // showing on menu / push the element to the menu
li = document.createElement('li');
li.innerHTML='Signup'
menu.appendChild(li)