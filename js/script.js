"use strict";

function init() {
    console.log("window loaded");
    const container = document.querySelector("body");
    const h1El = document.createElement("h1");
    h1El.innerText = "Wazup";
    container.append(h1El);
}



window.onload = init;