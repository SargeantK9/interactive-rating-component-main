let chosenRating;

document.getElementById("submitButton").addEventListener(
  "click", () => {
    detectRating();
},
false
);

function changeStates() {
  document.getElementById("rating-state").style.display = "none";
  document.getElementById("thankyou-state").style.display = "flex";
}

function detectRating() {
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const button4 = document.getElementById("button4");
  const button5 = document.getElementById("button5");
  switch (true) {
    case button1.checked:
      chosenRating = 1;
      changeStates();
      break;
    case button2.checked:
      chosenRating = 2;
      changeStates();
      break;
    case button3.checked:
      chosenRating = 3;
      changeStates();
      break;
    case button4.checked:
      chosenRating = 4;
      changeStates();
      break;
    case button5.checked:
      chosenRating = 5;
      changeStates();
      break;
    default:
      document.getElementById("heading1").innerHTML = "Please select a rating."
  }
  document.getElementById("rating-given").innerHTML = chosenRating;
}
