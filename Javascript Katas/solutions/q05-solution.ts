// How do you find the largest and smallest number in an unsorted integer array?

export const findLargestAndSmallest = (numberArray: number[]): {smallest: number, largest: number} => {
   const smallest = Math.min(...numberArray);
   const largest = Math.max(...numberArray);

   return {smallest, largest};
};
