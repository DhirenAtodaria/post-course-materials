// How do you find duplicate numbers in an array if it contains multiple duplicates?

export const findMultipleDuplicates = (numberArray: number[]) => {
  const duplicates = [];
  const sorted = numberArray.sort((a, b) => a - b);

  sorted.forEach((numb) => {
    let count = 0;
    while (sorted.indexOf(numb) !== -1) {
      count += 1;
      sorted.splice(sorted.indexOf(numb), 1);
    }
    if (count > 1) {
      duplicates.push(numb);
    }
  });

  return duplicates;
};

