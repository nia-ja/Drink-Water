// Bring in all small cups
const smallCups = document.querySelectorAll(".cup-small");

const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

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

    updateBigCup();
}

function updateBigCup() {
    // get an amount of full cups
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = document.querySelectorAll(".cup-small").length;

    if(fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        // 330px - height of the cup element
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // dealing with remained is showing up
    if(fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}