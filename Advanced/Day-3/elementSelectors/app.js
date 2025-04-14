// get element by id

const header = document.getElementById("header");
console.log(header.innerText = 'Welcome to js')



// get element by class

const programme = document.getElementsByClassName("programme");
console.log(programme)
console.log(programme[1].innerText)  // Allah


// querySelector()

const message1= document.querySelector('.message')
console.log(message1.innerText)
const Allmessage = document.querySelectorAll(".message")
Allmessage.forEach((message)=>console.log(message.textContent))
console.log(Allmessage.innerText)