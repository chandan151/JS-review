console.log('Hello World');

const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

const apods = ["img/Hourglass_HubblePathak_1080.jpg",
    "img/MoValley_5_oct.jpeg", "img/WitchHead_oct_4.jpeg"];
console.log(apods);

//document.getElementById("apod_group").innerHTML = `<img class="apod" src="${apods[0]}">`;

function apod_obj(title, source, date, img) {
    this.title = title,
        this.source = source,
        this.date = date,
        this.img = img
}

const apod_oct3 = new apod_obj("Hourglass Nebula", "NASA", "October 3, 2021", "img/Hourglass_HubblePathak_1080.jpg");
const apod_oct4 = new apod_obj("Witch Head Nebula", "NASA", "October 4, 2021", "img/WitchHead_oct_4.jpeg");
const apod_oct5 = new apod_obj("Missouri Valley", "NASA", "October 5, 2021", "img/MoValley_5_oct.jpeg");

const apod_array = [apod_oct3, apod_oct4, apod_oct5];

console.log(apod_array);


console.log(apod_obj);
/*console.log(apod_obj.date);
console.log(apod_obj["date"]);
console.log(apod_obj.title);*/

function createAPOD() {
    const apod = document.createElement("div");
    apod.className = "apod";
    apod.innerHTML = "<figure>" +
        "<img src='" + apod_array[index].img + "'>" +
        "<figcaption>" + apod_array[index].title + "</figcaption>" + "</figure>" +
        "<p>" + apod_array[index].date + "</p>" +
        "<p>" + apod_array[index].source + "</p>";
    document.getElementById("apod_group").innerHTML = "";
    document.getElementById("apod_group").appendChild(apod);
}

createAPOD();

prev.style.background = "#4a4a4a";
next.style.background = "#4a4a4a";
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
    index++;
    createAPOD();
    updateControls();
}

function goForward() {
    console.log("Going Forward");
    updateControls();
}