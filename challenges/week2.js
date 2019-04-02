function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city == "Manchester") {
    return true;
  }
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  var n = 0;
  for(i = 0; i < arr.length; i++){
        if(arr[i] == "sheep"){n++}
    }
  return n;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if ((person.address.city == "Manchester") && (person.address.postCode[0] == "M")) {
    return true;
  }
  return false;
};

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
