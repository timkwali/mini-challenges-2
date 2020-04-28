function isolateDuplicates(text) {
  if(typeof(text) !== "string") {
    return "Please enter a valid string";
  }

  text = [...text];
  let charactersGrouping = [];
  let result = "";
  let numberOfBrackets = 0;


  for(let i = 0; i < text.length; i++) {
    //pick first character of a group for comparisons
    let currentLetter = text[i];
    let currentLetterIndex = text.indexOf(currentLetter);
    let group = [];

    //compare first letter of group
    for (let j = currentLetterIndex; j < text.length; j++) {
      if(text[j].toLowerCase() == currentLetter.toLowerCase()) {
        group.push(text[j]);
        //check for last character
        if(j == text.length - 1) {
          i = j;
          charactersGrouping.push(group);
          break;
        }
      } else {
        i = j - 1;
        charactersGrouping.push(group);
        break;
      }
    }
  }

  //spread characters
  for(let k = 0; k < charactersGrouping.length; k++) {
    if(charactersGrouping[k].length > 2) {
      result += charactersGrouping[k][0];
      result += charactersGrouping[k][1];
      result += "[";
      for(let l = 2; l < charactersGrouping[k].length; l++) {
        result += charactersGrouping[k][l];
      }
      result += "]";
      numberOfBrackets++;
    } else {
      let char = charactersGrouping[k].join();
      char = char.replace(",", "");
      result += char;
    }
  }
  return (result, numberOfBrackets);
}

module.exports = isolateDuplicates;
