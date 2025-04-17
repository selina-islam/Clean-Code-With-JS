const Frist = document.querySelector("#first-list");
const Second = document.querySelector("#second-list");

let FirstItem = Frist.firstElementChild // first child select
Second.appendChild(FirstItem)


const langs = ['JavaScript', 'Typescript', 'Python', 'C', 'C#'];
let nodes = langs.map((proLangs) => {
        let li= document.createElement('li')
        li.textContent = proLangs
        return li
})
Second.append(...nodes)

let parent = document.createElement("div");
let child = document.createElement("p");
parent.appendChild(child);
parent.appendChild(child);
console.log(parent.childNodes.length); 