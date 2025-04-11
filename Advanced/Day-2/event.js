// What are event?

const clickBtn = document.getElementById("clickBtn");
const msgs = document.getElementById("msgs");
console.log(clickBtn);
const inputField = document.getElementById("inputField");
const keyMsgs = document.getElementById("keyMsgs");

// add click event to the button
clickBtn.addEventListener("click", () => {
  alert("The click button was clicked");
  msgs.innerText = "I am Selina";
});

// hover over the div

const hoverId = document.getElementById("hoverId");
hoverId.addEventListener("mouseover", () => {
  hoverId.style.backgroundColor = "lightgreen";
  hoverId.innerText = "You are hovering";
});

hoverId.addEventListener("mouseout", () => {
  hoverId.style.backgroundColor = "lightblue";
  hoverId.innerText = "Hover over me";
});

// handling keyboard events (keydown & keyup)

inputField.addEventListener("keydown", (event) => {
  keyMsgs.innerText = `You pressed: ${event.key}`;
});
inputField.addEventListener('keyup', () => {
        keyMsgs.innerHTML='You released a key!'
})