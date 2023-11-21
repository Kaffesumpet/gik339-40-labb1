const element = document.querySelector("button");

element.textContent = "Uppgift 1";

const textFields = document.querySelectorAll("input[type='text']");
textFields.forEach(textField => {
  textField.value = "Uppgift 2"; 
});

const checkboxElement = document.getElementByID("divStyle");
console.log(checkboxElement);
TypeError: document.getElementByID is not a function


const divElement = document.querySelector(".div")
divElement.style.backgroundColor = "red";
