const div = document.createElement('div');
div.id = 'content'
div.className='note'
const text = document.createTextNode('Greeting!')
div.appendChild(text)
document.body.appendChild(div)
console.log(div)