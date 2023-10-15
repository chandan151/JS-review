
const xhr = new XMLHttpRequest();

const baseurl = "https://api.nasa.gov/planetary/apod";
const query = "?api_key=9W9jhYeCfkD02oRR7rHncenWD8GOXGCkTWWd35N9&count=10";
const url = baseurl + query;
var apod_array;

xhr.open("GET", url);
xhr.send(null);

xhr.onload = function() {
    console.log("hurray, it worked!");
    //console.log(xhr.responseText);
    apod_array = JSON.parse(xhr.responseText);
    console.log(apod_array);
    createAPOD();
}

function createAPOD() {
    const apod = document.createElement("div");
    apod.className = "apod";
    apod.innerHTML = "<figure>" +
        "<img src='" + apod_array[index].url+ "'>" +
        "<figcaption>" + apod_array[index].copyright + "</figcaption>" + "</figure>" +
        "<p>" + apod_array[index].date + "</p>" +
        "<p>" + apod_array[index].source + "</p>";
    document.getElementById("apod_group").innerHTML = "";
    document.getElementById("apod_group").appendChild(apod);
}

const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

//prev.style.background = "#4a4a4a";
//next.style.background = "#4a4a4a";
prev.innerHTML = "&larr; Go Back";


prev.addEventListener("click", goBack);
next.addEventListener("click", goForward);

function goBack() {
    console.log("Going Backward");
    index++;
    updateControls();
    createAPOD();
}

function goForward() {
    console.log("Going Forward");
    index--;
    updateControls();
    createAPOD();
}

function updateControls() {
    if (index == 0) {
        next.style.visibility = "hidden";
    }
    else {
        next.style.visibility = "visible";
    }
    if (index == apod_array.length - 1) {
        prev.style.visibility = "hidden";
    }
    else {
        prev.style.visibility = "visibile";
    }
}