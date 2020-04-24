// 01 How do you find the missing numbers in a given integer array?

export const missingNumberInSequence = (numberArray: number[]) => {
  const firstNumber = Math.min(...numberArray);
  const lastNumber = Math.max(...numberArray);
  
  let missingNumbers = [];

  for (let i=firstNumber; i <= lastNumber; i++) {
    if (!numberArray.includes(i)) missingNumbers.push(i)
  }

  return missingNumbers
}