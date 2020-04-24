// 13. How do you check if two strings are a rotation of each other?

export const areRotations = (text1: string, text2: string): boolean => {
    const temp = text1 + text1;

    if (temp.indexOf(text2) !== -1) {
        return true;
    } else {
        return false;
    }
};
