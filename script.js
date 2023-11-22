// Sparar elementen i variabler så att de kan användas senare & skriver ut dem i konsollen var för sig
const checkboxElement = document.querySelector('input[type="checkbox"]');
console.log(checkboxElement);

const textFields = document.querySelectorAll(".textfield");
console.log(textFields);

const btnElement = document.getElementById("myButton");
console.log(btnElement);

const divElement = document.getElementsByClassName("divvar")[0];
console.log(divElement);


// Denna koden ansvarar för att hantera inputevents på textfälten & uppdatera divElement med texten från textfältet "content"
// Denna funktion tar stringen från "content" textfältet & skriver ut texten i divElement
function handleInput(e) {
  // Skriver ut vilket element som triggar eventet i konsollen (e.target är elementet som triggat)
  console.log("Event triggered by: ", e.target);
  // Hämtar namnet på elementet som triggar eventet och sparar i en variabel
  const fieldName = e.target.name;

  // Om elementet är strictly equal med "content", uppdatera divElement med texten(value) från textfältet
  if (fieldName === "content") {
    divElement.innerHTML = e.target.value;
  }
}

// Arrowfunktion som lägger till eventlisteners för "inputevents" på alla textfält med hjälp av forEach loop
textFields.forEach(textField => {
  textField.addEventListener("input", handleInput);
});

// Denna koden ansvarar för att uppdatera bakgrundsfärgen på divElement när man skriver in en färg i color textfältet samt klickar i checkboxen 
// Lägger till en eventlistener på checkboxen & uppdaterar bakgrundsfärgen på divElement med matchande färg från color textfältet
checkboxElement.addEventListener("change", () => {
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

// Denna koden ansvarar för att ta bort divElement från DOM trädet (& lägga tillbaka det igen, för att vi är busiga, tihi)
// Lägger till en eventlistener för "click event" på knappen 
btnElement.addEventListener("click", () => {
  
  // Om divElement finns i DOM trädet, ta bort det & byt text på knappen
  if (document.contains(divElement)) {
    divElement.remove();
    btnElement.textContent = "Men vad är det som låter så vackert?!";
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

