const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.onclick = function () {
    console.log(event.target);
    console.log(this);

    document.bgColor = "yellow";
};

form.onclick = function () {
    event.stopPropagation();

    document.bgColor = "blue";
};

button.onclick = function () {
    event.stopPropagation();

    document.bgColor = "grey";
};


// Data attributes and adding onclick functions in a loop

/* const one  = document.querySelector(".one"); */


// Access different dataset in the html.
/* one.onclick = function() {
    console.log(event.target.dataset.price);
} */

/* one.onclick = function() {
    console.log(event.target.dataset.colour);
} */


// Looping through the datasets and adding onclick function to every div.


const divs = document.querySelectorAll(".container > div");

for(let i = 0;i < divs.length; i++) {
    console.log(divs[i].className);

    divs[i].onclick = function() {
        console.log(event.target.dataset.price);
    }
;}


// onmouseover and onmouseout events


const hoverDiv = document.querySelector(".hover-test");

/* hoverDiv.onmouseover = function() {
        console.log("hovering over");

        event.target.classList.add("hover");
};

hoverDiv.onmouseout = function() {
    console.log("hovering stops");

    event.target.classList.remove("hover");
}; */


const divsMouse = document.querySelectorAll(".containerevent > div");
const display = document.querySelector(".display");

for(let i = 0; i < divsMouse.length; i++) {
    divsMouse[i].onmouseover = function() {

        const content = event.target.dataset.content;
        display.innerHTML = content;

    }

    divsMouse[i].onmouseout = function() {
        display.innerHTML = "";
    }

}
