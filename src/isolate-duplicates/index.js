function isolateDuplicates(text) {
  if(typeof(text) !== "string") {
    return "Please enter a valid string";
  }

  text = [...text];
  let identicalCharacters = new Set(text);

  for(let i = 0; i < text.length; i++) {
    
  }


}

isolateDuplicates("slfssfefls");

module.exports = isolateDuplicates;
