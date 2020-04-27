function isolateDuplicates(text) {
  if(typeof(text) !== "string") {
    return "Please enter a valid string";
  }

  text = [...text];
  let identicalCharacters = new Set(text);
  let charactersGrouping = [];


  for(let i = 0; i < text.length; i++) {
    //pick first character of a group for comparisons
    console.log(i);
    let currentLetter = text[i];
    let currentLetterIndex = text.indexOf(currentLetter);
    let group = [];

    //compare first letter of group
    for (let j = currentLetterIndex; j < text.length; j++) {
      if(text[j] == currentLetter) {
        group.push(text[i]);
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
  console.log(charactersGrouping)



}

isolateDuplicates("aaaabbcdefffffffg");

module.exports = isolateDuplicates;
