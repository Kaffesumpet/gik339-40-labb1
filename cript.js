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


function handleInput(e) {
  console.log("Event triggered by: ", e.target);
  const fieldName = e.target.name;

  if (fieldName === "content") {
    divElement.innerHTML = e.target.value;
  }
}
// Denna funktion tar stringen från color, skriver ut texten 


checkboxElement.addEventListener("change", function() {
  const colorInput = document.querySelector('input[name="color"]');
  const colorValue = colorInput.value;
  divElement.style.backgroundColor = colorValue;
});
// Denna tar den tagna färgen ovan och sätter det som bakgrund color


textFields.forEach(textField => {
  textField.addEventListener("input", handleInput);
});

if (document.contains(divElement)) {
  divElement.remove();
} else {
  divElement = document.createElement("div");
  documen.body.appendChild(divElement);
}

/*
btnElement.addEventListener("click", function() {
    divElement.remove();
});*/
