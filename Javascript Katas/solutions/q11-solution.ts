// 11: How do you check if a given string is a palindrome?

export const palindrome = (text: string) => {
    const newText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=-_`~–() ]/g, '');
    return newText === newText.split('').reverse().join('');
};
