// 15: How do you find all permutations of a text?

export const allPermutations = (text: string) => {
  if (text.length < 2) {
    return text;
  }

  const permutations = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (text.indexOf(char) !== i) {
      continue;
    }

    const remainingString = text.slice(0, i) + text.slice(i + 1, text.length);

    for (const subPermutation of allPermutations(remainingString)) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
};
