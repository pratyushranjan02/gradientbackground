const body = document.querySelector("body");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const form = document.getElementById("input-form");
const result = document.getElementById("result");

input1.addEventListener("input", (e) => {
   e.target.parentElement.style.background = e.target.value;
});

input2.addEventListener("input", (e) => {
   e.target.parentElement.style.background = e.target.value;
});

form.addEventListener("submit", (e) => {
   e.preventDefault();
   result.textContent = `background-image : linear-gradient(to right, ${input1.value}, ${input2.value});`;
});
