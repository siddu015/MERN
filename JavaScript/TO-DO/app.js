let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")

btn.addEventListener("click", function () {
    if(inp.value !== '') {
        let item = document.createElement("li")
        item.innerText = inp.value

        let delBtn = document.createElement("button")
        delBtn.innerText = "delete"
        delBtn.classList.add("delete")

        item.appendChild(delBtn)
        ul.appendChild(item)
    }

    inp.value = ''
});


ul.addEventListener("click", function (event) {
    if(event.target.nodeName === 'BUTTON')
        event.target.parentElement.remove()
}) 

// let delBtns = document.querySelectorAll(".delete");
// for(let delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = delBtn.parentElement;
//         par.remove()
//     })
// }