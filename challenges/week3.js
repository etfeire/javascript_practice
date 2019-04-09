function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(function (num) {
    return Math.pow(num, 2);
  });
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  return words[0].toLowerCase() + words[1][0].toUpperCase() + words.slice(1, 2);
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
