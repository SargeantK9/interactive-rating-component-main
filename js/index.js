let chosenRating;

document.getElementById("submitButton").onclick = function() {
  const button1 = document.getElementById("button1")
  const button2 = document.getElementById("button2")
  const button3 = document.getElementById("button3")
  const button4 = document.getElementById("button4")
  const button5 = document.getElementById("button5")
  switch (true) {
    case button1.checked:
      chosenRating = 1;
      break;
    case button2.checked:
      chosenRating = 2;
      break;
    case button3.checked:
      chosenRating = 3;
      break;
    case button4.checked:
      chosenRating = 4;
      break;
    case button5.checked:
      chosenRating = 5;
      break;
    default:
      document.getElementById("heading1").innerHTML = "Please select a rating."
    }
  document.getElementById("rating-state").setAttribute("hidden", "true");
  document.getElementById("thankyou-state").setAttribute("hidden", "false");

  }
}
