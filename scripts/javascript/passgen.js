// TODO: catch if same character is pulled twice in a row
// TODO: manage exceptions caused by not choosing any character for the password.


const range = document.querySelector(".range");
const bubble = document.querySelector(".bubble");

range.addEventListener("input", () => {
  setBubble(range, bubble);
});
setBubble(range, bubble);

var password = "";
var blank = ["Password", "Secure", "Birthday", "Christmas", "Toasty", "Shoryuken"];
var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUWVXYZ";
var numbers = "0123465789";
var specials = "!\"#$%&'()*+,-./\:;<=>?@[]^_`{|}~";

document.getElementById('password').value = password;

function copyPassword() {
  var copy = document.getElementById('password').value;
  navigator.clipboard.writeText(copy);
}

function genPassword() {
  var p_value = 0, p_length = document.getElementById('range').value, temp = "", p_array = [];
  //checking which characters are allowed
  if(document.getElementById('lower').checked) p_value += 1;
  if(document.getElementById('upper').checked) p_value += 10;
  if(document.getElementById('number').checked) p_value += 100;
  if(document.getElementById('special').checked) p_value += 1000;

  switch (p_value) {
    case 1:     //lowercase
      for (var i = 0; i < p_length; i++) {
        temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
      }
      break;
    case 10:    //uppercase
      for (var i = 0; i < p_length; i++) {
        temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
      }
      break;
    case 11:    //lowers+uppers
        do {
          for (var i = 0; i < p_length; i++) {
            p_array[i] = Math.floor(Math.random() * 2);
            if (p_array[i] == 0) p_lower = true;
            else p_upper = true;
          }
        } while (!p_lower || !p_upper);

        for (i = 0; i < p_length; i++) {
          if (p_array[i] == 0) temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
          else temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
        }
      break;
    case 100:   //numbers
      for (var i = 0; i < p_length; i++) {
        temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
      }
      break;
    case 101:   //lowers+number
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 2);
          if (p_array[i] == 0) p_lower = true;
          else p_number = true;
        }
      } while (!p_lower || !p_number);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
        else temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
      }
      break;
    case 110:   //uppers+numbers
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 2);
          if (p_array[i] == 0) p_upper = true;
          else p_number = true;
        }
      } while (!p_upper || !p_number);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
        else temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
      }
      break;
    case 111:   //lowers+uppers+numbers
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 3);
          if (p_array[i] == 0) p_lower = true;
          else if (p_array[i] == 1) p_upper = true;
          else p_number = true;
        }
      } while (!p_lower || !p_upper || !p_number);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
        else if (p_array[i] == 1) temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
        else temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
      }
      break;
    case 1000:  //all specials
      for (var i = 0; i < p_length; i++) {
        temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
      }
      break;
    case 1001:  //lowers+specials
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 2);
          if (p_array[i] == 0) p_lower = true;
          else p_special = true;
        }
      } while (!p_lower || !p_special);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
        else temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
      }
      break;
    case 1010:  //uppers+specials
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 2);
          if (p_array[i] == 0) p_upper = true;
          else p_special = true;
        }
      } while (!p_upper || !p_special);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
        else temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
      }
      break;
    case 1011:  //lowers+uppers+specials
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 3);
          if (p_array[i] == 0) p_lower = true;
          else if (p_array[i] == 1) p_upper = true;
          else p_special = true;
        }
      } while (!p_lower || !p_upper || !p_special);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
        else if (p_array[i] == 1) temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
        else temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
      }
      break;
    case 1100:  //numbers+specials
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 2);
          if (p_array[i] == 0) p_number = true;
          else p_special = true;
        }
      } while (!p_number || !p_special);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
        else temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
      }
      break;
    case 1101:  //lowers+numbers+specials
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 3);
          if (p_array[i] == 0) p_lower = true;
          else if (p_array[i] == 1) p_number = true;
          else p_special = true;
        }
      } while (!p_lower || !p_number || !p_special);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
        else if (p_array[i] == 1) temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
        else temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
      }
      break;
    case 1110:  //uppers+numbers+specials
      do {
        for (var i = 0; i < p_length; i++) {
          p_array[i] = Math.floor(Math.random() * 3);
          if (p_array[i] == 0) p_upper = true;
          else if (p_array[i] == 1) p_number = true;
          else p_special = true;
        }
      } while (!p_upper || !p_number || !p_special);

      for (i = 0; i < p_length; i++) {
        if (p_array[i] == 0) temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
        else if (p_array[i] == 1) temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
        else temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
      }
      break;
    case 1111:  //all
    do {
      for (var i = 0; i < p_length; i++) {
        p_array[i] = Math.floor(Math.random() * 4);
        if (p_array[i] == 0) p_lower = true;
        else if (p_array[i] == 1) p_upper = true;
        else if (p_array[i] == 2) p_number = true;
        else p_special = true;
      }
    } while (!p_lower || !p_upper || !p_number || !p_special);

    for (i = 0; i < p_length; i++) {
      if (p_array[i] == 0) temp += lowers.substr(Math.floor(Math.random() * lowers.length), 1);
      else if (p_array[i] == 1) temp += uppers.substr(Math.floor(Math.random() * uppers.length), 1);
      else if (p_array[i] == 2) temp += numbers.substr(Math.floor(Math.random() * numbers.length), 1);
      else temp += specials.substr(Math.floor(Math.random() * specials.length), 1);
    }
      break;
    default:
      temp = blank[Math.floor(Math.random() * blank.length)];
  }
  document.getElementById('password').value = temp;
}

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

/* OLD VERSIONS
> could put only a single optional character per generation
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
*/
