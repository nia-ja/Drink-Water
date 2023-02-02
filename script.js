// Bring in all small cups
const smallCups = document.querySelectorAll(".cup-small");

const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx))
})

function highlightCups(idx) {
    // to be able to toggle between filled/empty for particular cup
    if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
        idx--;
    }

    // to fill all cups before and empty any after them
    smallCups.forEach((cup, idx2) => {
        if(idx2<=idx) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    })
}