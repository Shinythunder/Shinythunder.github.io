let div = document.createElement("div");
div.style.height = "200px";
div.style.width = "200px";
div.style.backgroundColor = "white";
div.style.border = "2px solid black";
div.style.position = "absolute";
div.style.top = "10px";
div.style.left = "25%";
div.style.transition = "ease 0.5s";
document.body.appendChild(div);

let input = document.createElement("input");
input.style.backgroudColor = "white";
input.style.height = "25px";
input.style.width = "200px";
input.style.position = "absolute";
input.style.top = "230px";
input.style.left = "24%";
input.style.border = "2px solid black";
input.style.borderRadius = "5.5px";
document.body.appendChild(input);

input.addEventListener("input", function() {
div.style.backgroundColor = input.value;
div.style.borderRadius = input.value;
if (input.value === "boo" || input.value === "Boo") {
  div.style.opacity = "0";
} else {
  div.style.opacity = "1";
  }
})
