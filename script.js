let stats = document.querySelector(".status");
let text = document.getElementById("text");
let char = document.getElementById("char");
let words = document.getElementById("words");
let lines = document.getElementById("lines");
let symbols = document.getElementById("symbols");

//REGULAR EXPRESSIONS ALERT!!!

function count() {
  if (text.value.length === 0) {
    statusbar.style.display = "none";
  } else {
    stats.style.display = "block";
    //Counting characters - It uses the simple length string function and puts it into the char HTML
    char.innerHTML = text.value.length + " Characters";

    //Counting words - Split the string with the /\s+/ regular expression, meaning one or more whitespace characters.
    words.innerHTML = text.value.trim().split(/\s+/).length + " Words";

    //Counting lines - Split the string with the \n expression and we get the expected result
    lines.innerHTML = text.value.split("\n").length + " Lines";

    // Counting symbols - Split the string wherever the symbols are present for simplicity sake
    symbols.innerHTML =
      text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Symbols";

    //If text value's length is equal to 0 then the status will be hidden else status will be visible
  }
}

text.addEventListener("input", count);
