function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    };
  } return smallNums;
}


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name[0] === char) {
      newNames.push(name);
    }
  }; return newNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.startsWith("to ") == true) {
      verbWords.push(word);
    }
  }; return verbWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (Number.isInteger(num)) {
      integers.push(num);
    }
  }; return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const city = user.data.city.displayName;
    cities.push(city);
  }; return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squaredRoots = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const squared = Number(Math.sqrt(num).toFixed(2));
    squaredRoots.push(squared);
  }; return squaredRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const strings = [];
  for (let i = 0; i < sentences.length; i ++) {
    const subString = sentences[i];
    const subStringLow = subString.toLowerCase();
    if (subStringLow.indexOf(str.toLowerCase()) >= 0) {
      strings.push(subString);
    }
  }; return strings;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
