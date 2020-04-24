// How do you print duplicate characters from a string?

export const findDuplicates = (text: string): string[] => {
  const duplicates = [];
  const charArray = text.split('');

  charArray.forEach((char) => {
    if (charArray.indexOf(char) !== charArray.lastIndexOf(char)) {
        duplicates.push(char);
    }
  });

  return [... new Set(duplicates)];
};
