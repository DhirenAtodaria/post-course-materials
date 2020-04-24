// 06: How do you find all pairs of an integer array whose sum is equal to a given number?

export const findPairsWhichSum = (numberArray, goal) => {
  const array = [];
  const sorted = numberArray.sort((a, b) => a - b);

  sorted.forEach((numb) => {
    sorted
      .slice(sorted.indexOf(numb) + 1, sorted.length)
      .forEach((otherNumb) => {
        if (numb + otherNumb === goal) {
          if (
            !array.some((item) => {
              return item[0] === numb && item[1] === otherNumb;
            })
          ) {
            array.push([numb, otherNumb]);
          }
        }
      });
  });

  return array;
};
