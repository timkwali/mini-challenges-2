function removeDuplicates(obj) {

  //remove duplicate elements of object values
  for(let key in  obj) {
    let ky = new Set(obj[key]);
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


  //compare values and remove duplicates


}

removeDuplicates(
  {
    "2345": ["A", "B", "C", "Y", "D", "B"],
    "45": ["A", "B", "D", "A"],
    "325": ["A", "B", "T"],
    "5": ["Q", "C"]
  }
);
//module.exports = removeDuplicates;
