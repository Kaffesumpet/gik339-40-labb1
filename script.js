// Sparar elementen i variabler så att de kan användas senare & skriver ut dem i konsollen var för sig
const checkboxElement = document.querySelector('input[type="checkbox"]');
console.log(checkboxElement);

const textFields = document.querySelectorAll(".textfield");
console.log(textFields);

const btnElement = document.getElementById("myButton");
console.log(btnElement);

const divElement = document.getElementsByClassName("divvar")[0];
console.log(divElement);


// Denna funktion tar stringen från "content" textfältet & skriver ut texten i divElement
function handleInput(e) {
  // Skriver ut vilket element som triggar eventet i konsollen
  console.log("Event triggered by: ", e.target);
  // Hämtar namnet på elementet som triggar eventet och sparar i en variabel
  const fieldName = e.target.name;

  // Om elementet är strictly equal med "content", uppdatera divElement med texten från textfältet
  if (fieldName === "content") {
    divElement.innerHTML = e.target.value;
  }
}

// Arrowfunktion som lägger till eventlisteners för "inputevents" på alla textfält med hjälp av forEach loop
textFields.forEach(textField => {
  textField.addEventListener("input", handleInput);
});

// Lägger till en eventlistener på checkboxen & uppdaterar bakgrundsfärgen på divElement med matchande färg från color textfältet
checkboxElement.addEventListener("change", function() {
  // Hämta strängen från fältet med namn "color"
  const colorInput = document.querySelector('input[name="color"]');
  const colorValue = colorInput.value;
  // Uppdatera bakgrundsfärgen på divElement med den hämtade strängen från "color" textfältet
  divElement.style.backgroundColor = colorValue;
});

// Sparar en kopia av innehållet i divElement 
const divSavedElement = divElement;
const lastImage = document.querySelector('.image-box');

const lastTargetElement = document.querySelector('.lastTarget');

// Lägger till en eventlistener för "click event" på knappen 
btnElement.addEventListener("click", function() {
  // Om divElement finns i DOM trädet, ta bort det & byt text på knappen
  if (document.contains(divElement)) {
    divElement.remove();
    btnElement.textContent = "Nej jävlar, nu blev det fel!";
    // Annars lägg tillbaka divElement i DOM trädet & byt tillbaka texten på knappen
  } else {
    lastTargetElement.appendChild(divSavedElement);
    btnElement.textContent = "Remove";
  }
});

// Gammal event listener för knappen som tar bort divElement & inget mer
/*
btnElement.addEventListener("click", function() {
    divElement.remove();
});*/
