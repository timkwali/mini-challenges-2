function removeDuplicates(obj) {

  //remove duplicate elements of object values
  for(let key in  obj) {
    let ky = [...new Set(obj[key])];
    obj[key] = ky;
  }

  //sort keys in ascending order
  let keys = Object.keys(obj);
  //keys = keys.map(key => parseInt(key));
  keys = keys.sort((a, b) => a - b);

  //arrange object properties according to the keys above
  let object = {};
  for(let i = 0; i < keys.length; i++) {
    object[keys[i]] = obj[keys[i]];
  }
  obj = object;
  //convert to array
  obj = Object.entries(obj);

  //compare and remove duplicates
  for(let i = obj.length - 1; i > 0; i--) { //last array in obj for comparison
    let lastArray = obj[i][1];

    for(let j = 0; j < lastArray.length; j++) { //pick an element of the array to compate to the rest of arrays
      let currentLastArrayElement = lastArray[j];

      for(let k = i - 1; k >= 0; k--) {
        let testArray = obj[k][1];

        for(let l = 0; l < testArray.length; l++) {
          let currentTestArrayElement = testArray[l];
          if(currentLastArrayElement == currentTestArrayElement) {
            testArray.splice(l, 1);
          }
        }
      }
    }
  }


}

removeDuplicates(
  {
    "12": [],
    "350": ["C", "A"],
    "291": ["G"],
    "236": ["L", "X", "H"],
    "91": ["P", "R", "S", "D"],
    "53": ["B"],
  }
);
//module.exports = removeDuplicates;
