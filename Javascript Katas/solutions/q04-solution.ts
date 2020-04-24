// How do you remove duplicate numbers from an array?

export const removeDuplicates = (numberArray: number[]) => {
    return [... new Set(numberArray)];
};
