const { app } = require("../inserAdjacentHtml/app");

const current = document.querySelector(".current");
const arr = ["forgiveness", "honesty", "modesty"];

const nodes = arr.map((param) => {
  const p = document.createElement("p");
  p.textContent = param;
  return p;
});

current.prepend(...nodes);
app.insertAdjacentHTML("afterend", "<p>afterend</p>");
