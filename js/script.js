var body = document.querySelector("body");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var colorWrap = document.getElementsByClassName("input-color-wrap");
var h3 = document.querySelector("h3");

input1.addEventListener("input", function () {
   body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
});

input2.addEventListener("input", function () {
   body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
   h3.appendChild(document.createTextNode("CSS Code is : background-image : linear-gradient(to right, " + input1.value + ", " + input2.value + ")"));
});
