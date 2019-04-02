function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  else 
    return word[0].toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  else 
  return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase() + '.';
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  else return ((originalPrice / 100) * vatRate) + originalPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  else return originalPrice - ((originalPrice / 100) * reduction);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  else return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  else return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const reversedWords = words.map(function (words) {
      return words.split("").reverse().join("").split(" ").reverse().join(" ");
    });
    return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  else var linuxUsers = users.reduce(function (n, user) {
    return n + (user.type == "Linux");
  }, 0);
  return linuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
    let sum = scores.reduce((previous, current) => current += previous);
    let avg = sum / scores.length;
    if (Number.isInteger(avg)) {
      return avg;
      };
    return Number(avg.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
