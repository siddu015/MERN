let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("click", async () => {
    let country = input.value;
    let colleges = await getColleges(country)

    showColleges(colleges)
})

function showColleges(colleges) {
    let ul = document.querySelector("ul")
    for(college of colleges) {
        let li = document.createElement("li")
        li.innerText = college.name;
        ul.appendChild(li)
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country)
        return res.data
    } catch (e) {
        return  []
    }
}