// 16: How do you check if a string contains only digits?

export let onlyDigits = (text: string) => {
    return text.match(/^[0-9]+$/) != null;
};
