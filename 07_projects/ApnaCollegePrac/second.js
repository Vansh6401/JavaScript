let divs = document.querySelectorAll(".box")

// divs[0].innerText = "HII this is div 1"
// divs[1].innerText = "HII this is div 2"
// divs[2].innerText = "HII this is div 3"

let idx = 1;
for(div of divs) {
    div.innerText = `new unique value ${idx}`
    idx++;
}