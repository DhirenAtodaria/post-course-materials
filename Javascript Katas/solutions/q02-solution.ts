// How do you find the duplicate number on a given integer array?

export const findDuplicate = (numberArray: number[]) => {
    const arraySum = numberArray.reduce((a,b) => a + b, 0);
    const maxNumber = Math.max(...numberArray)
    const actualSum = (maxNumber*(maxNumber + 1)) / 2
    const duplicate = arraySum - actualSum;
    return duplicate ? duplicate : undefined;
};

