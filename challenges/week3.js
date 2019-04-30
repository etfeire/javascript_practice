function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(function (num) {
    return Math.pow(num, 2);
  });
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  const firstWord = words.splice(0, 1);
  const capWords = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
  return firstWord + capWords;
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  let totalSubjects = 0;
  people.forEach(function (person) {
    totalSubjects += person.subjects.length;
  });
  return totalSubjects;
}
function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let foundIngredient = false;
  for (var i = 0; i < menu.length; ++i) {
    if (menu[i].ingredients.includes(ingredient)) {
      foundIngredient = true;
    }
  }
  return foundIngredient;
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  const objMap = {};
  arr1.forEach((e1) => arr2.forEach((e2) => {
    if (e1 === e2) {
      objMap[e1] = objMap[e1] + 1 || 1;
    }
  }
  ));
  return Object.keys(objMap).map(e => Number(e));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
