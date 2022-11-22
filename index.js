// 1) Знайти середнє арифметичне значення усіх переданих аргументів,
//  якщо аргументів не має - повертати null

// 2) Замінити усі максимальні значення в масиві на значення 0

// 1)***************************************

/**
 *  @param {[any]}
 * @returns {number, null}
 */
const getAverage = function () {
  if (arguments.length === 0) {
    return null;
  }
  let resultSum = 0;
  for (let i = 0; i < arguments.length; i++) {
    resultSum += arguments[i];
  }
  return resultSum / arguments.length;
};
// console.log(getAverage(10, 20, 30, 40, 50))

// 2) *****************************************

const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];

/**
 *
 * @param {[number]} array
 * @returns {number}
 */
function getMaxElem(array) {
  let maxElem = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[maxElem]) {
      maxElem = array[i];
    }
  }
  return maxElem;
}

/**
 * @param {[number]} array
 * @param {number} value
 * @returns {[number]}
 */
function changeMaxElem(array, value) {
  let maxElem = getMaxElem(array);
  for (let i = 0; i < array.length; i++) {
    if (maxElem === array[i]) {
      array.splice(i, 1, value);
    }
  }
  return array;
}

console.log(arrNums);
console.log(changeMaxElem(arrNums, 0));



const arrNums2 = [1, 9, 5, 6, 7, 9, 4, 6];

/**
 *
 * @param {[number]} array
 * @returns {number}
 */
function getMaxOfArray(array) {
  return Math.max.apply(null, array);
}

/**
 *
 * @param {[number]} array
 * @param {number} value
 * @returns {[number]}
 */
function changeMaxElem2(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (getMaxOfArray(array) === array[i]) {
      array.splice(i, 1, value);
    }
  }
  return array;
}
console.log(arrNums2);
console.log(changeMaxElem2(arrNums2, 0));











// function changeMaxElem(array, value) {
//   let maxElem = getMaxElem(array);
//   let startIndex = 0;

//   while (true) {
//     let startIndexMax = array.indexOf(maxElem, startIndex++);

//     if (startIndexMax === -1) {
//       return;
//     }
//     array.splice(startIndexMax, 1, value);
//   }

// }
// console.log(arrNums)
// changeMaxElem(arrNums,0)
// console.log(arrNums)
