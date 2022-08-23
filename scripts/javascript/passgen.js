var range = document.getElementById('range').value;
var password = "";
document.getElementById('password').value = password;

function genPassword() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specials = "!?$%^&*()";
  var temp = "";

  if (document.getElementById('upper').checked) var upper_check = Math.floor(Math.random() * document.getElementById('range').value);

  if (document.getElementById('number').checked) {
    do {
      var number_check = Math.floor(Math.random() * document.getElementById('range').value);
    } while (number_check == upper_check);
  }

  if (document.getElementById('special').checked) {
    do {
      var special_check = Math.floor(Math.random() * document.getElementById('range').value);
    } while (upper_check == special_check || number_check == special_check);
  }

  for (var i = 0; i < document.getElementById('range').value; i++) {
    if (i == upper_check) temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
    else if (i == number_check) temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
    else if (i == special_check) temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
    else temp += chars.substr(Math.floor(Math.random() * chars.length), 1);
  }
  document.getElementById('password').value = temp;
}

function copyPassword() {
  var copy = document.getElementById('password').value;
  navigator.clipboard.writeText(copy);
}

// TODO: catch if same character is pulled twice in a row
// TODO: make it so it can use multiple special characters

// TODO: revise character selection - loop that put values in an array based on what to choose. 0 chars, 1 upper, 2 number and 3 specials
// every checkbox will make a loop run through the process again until everything is verified
// do {
//   for (i<length) {
//     random 0/3 on array[i]
//     if (array[i]==0/3) check = true
//   }
// } while(check1, check2, check3 != false)
