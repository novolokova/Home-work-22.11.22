// 1) Знайти середнє арифметичне значення усіх переданих аргументів,
//  якщо аргументів не має - повертати null

// 2) Замінити усі максимальні значення в масиві на значення 0



// 1)
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
console.log(getAverage(10, 20, 30, 40, 50))