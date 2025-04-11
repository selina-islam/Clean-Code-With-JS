// Adding event listeners

const eventMsgs = document.getElementById("eventMsgs");
const eventBtn = document.getElementById("eventBtn");

eventBtn.addEventListener('click', () => {
        eventMsgs.innerText = 'Event listeners trigger!'
})
setTimeout(() => {
        eventBtn.removeEventListener('click', () => {
                console.log("this won't work after removal")
        })
        eventBtn.innerText = 'removed event listeners!'
        eventBtn.style.backgroundColor = 'red'
        eventBtn.style.padding = '5px';
        eventBtn.style.borderRadius='5px'
}, 5000)