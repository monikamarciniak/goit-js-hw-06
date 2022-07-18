const input = document.querySelector("input#font-size-control");
const output = document.querySelector("span#text");

input.addEventListener("input", (event) => { 
    output.style.fontSize = input.value + "px";
});