const mainSection = document.getElementById("main-section");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const form = document.getElementById("input-form");
const result = document.getElementById("result");

const setGradient = (e) => {
   e.target.parentElement.style.background = e.target.value;
   mainSection.style.background = `linear-gradient(to right top, ${input1.value}, ${input2.value})`;
};

input1.addEventListener("input", setGradient);

input2.addEventListener("input", setGradient);

form.addEventListener("submit", (e) => {
   e.preventDefault();
   result.textContent = `background-image : linear-gradient(to right top, ${input1.value}, ${input2.value});`;
   mainSection.style.background = `linear-gradient(to right top, ${input1.value}, ${input2.value})`;
});
