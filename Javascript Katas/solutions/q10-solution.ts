// 10: How do you print the first non-repeated character from a string?

export const printFirstNonRepeat = (text: string) => {
    const charArray = text.split('');

    for (const char of charArray) {
        if (charArray.indexOf(char) === charArray.lastIndexOf(char)) {
            return char;
        }
    }
};
