// 09: How do you check if two strings are anagrams of each other?

export const compareAnagrams = (word1: string, word2: string): boolean => {
    const sortedString1 = word1.toLowerCase().split('').sort().join('');
    const sortedString2 = word2.toLowerCase().split('').sort().join('');

    return (sortedString1 === sortedString2);
};
