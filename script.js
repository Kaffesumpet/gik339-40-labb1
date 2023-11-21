const checkboxElement = document.querySelector('input[type="checkbox"]');
console.log(checkboxElement);

const textFields = document.querySelectorAll(".textfield");
console.log(textFields);

// textFields.forEach(textField => {
//   textField.value = "Uppgift 2"; 
// });

const btnElement = document.getElementById("myButton");
console.log(btnElement);

// btnElement.textContent = "Uppgift 1";

const divElement = document.getElementsByClassName("divvar")[0];
console.log(divElement);

// divElement.style.backgroundColor = "red";


checkboxElement.addEventListener("change", function() {
  const colorInput = document.querySelector('input[name="color"]');
  const colorValue = colorInput.value;
  divElement.style.backgroundColor = colorValue;
});

function handleInput(e) {
  console.log("Event triggered by: ", e.target);
  const fieldName = e.target.name;

  if (fieldName === "content") {
    divElement.innerHTML = e.target.value;
  }
}

textFields.forEach(textField => {
  textField.addEventListener("input", handleInput);
});

btnElement.addEventListener("click", function() {
    divElement.remove();
});
