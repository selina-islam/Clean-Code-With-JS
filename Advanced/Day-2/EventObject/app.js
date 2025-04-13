// event object

const myForm = document.getElementById('myForm')
const nameInput = document.getElementById("nameInput");
const formMsgs = document.getElementById("formMsgs");

myForm.addEventListener('submit', (event) => { 
        event.preventDefault(); // prevent reloading
        formMsgs.innerText=`form submitted by: ${nameInput.value}`
})