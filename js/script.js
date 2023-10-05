console.log('Hello World');

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const apods = document.getElementsByClassName("apod")[0];

//console.log(apods);

prev.style.background = "#4a4a4a";
prev.innerHTML = "&larr; Go Back";


prev.addEventListener("click", goBack);
next.addEventListener("click", goForward);


function updateControls() {
    if (index == apods.length - 1) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }
    if (index == 0) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    }
}

function goBack() {
    console.log("Going Backward");
    apods[index].style.display = "none";
    index++;
    apods[index].style.display = "grid";
    updateControls();
}

function goForward() {
    console.log("Going Forward");
    apods[index].style.display = "none";
    index--;
    apods[index].style.display = "grid";
    updateControls();
}