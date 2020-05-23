
const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {
  text = text.trim();
  let txt = text.split("   ");
  //remove any extra spaces on either side of each word
  text = txt.map(tx => tx.trim());
  let group = [];
  let finalGroup = [];
  let result = "";

  //group code by words they form and remove single spaces
  for(let i = 0; i < text.length; i++) {
    let codeGroup = text[i].split(" ");
    group.push(codeGroup);
  }

  //convert individual group to letters
  for(let j = 0; j < group.length; j++) {
    let letterGroup = [];
    for(let k = 0; k < group[j].length; k++) {
      letterGroup.push(MORSE_CODE[group[j][k]]);
    }
    //Send to finalGroup
    finalGroup.push(letterGroup);
  }

  //convert words in finalGroup to string
  for(let l = 0; l < finalGroup.length; l++) {
    for(let m = 0; m < finalGroup[l].length; m++) {
      result += finalGroup[l][m];
    }
    result += " ";
  }

  //remove redundant space
  return result.slice(0, -1);
}

module.exports = morse;

