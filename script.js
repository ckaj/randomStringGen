const alphabet = "abcdefghijklmnopqrstuvwxyz";

const generateWord = () => {
    let word = "";
    const length = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

    for (let i = 0; i < length; i++) {
        word += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    document.getElementById("text").innerHTML = word;
    return word;
};

const generateSentence = () => {
    const sentence = [];
    const length = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

    for (let i = 0; i < length; i++) {
        sentence.push(generateWord());
    }

    sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);
    sentence[sentence.length - 1] += ".";

    document.getElementById("text").innerHTML = sentence.join(" ");
    return sentence.join(" ");      
};

const generateParagraph = () => {
    const paragraph = [];
    const length = 10;

    for (let i = 0; i < length; i++) {
        paragraph.push(generateSentence());
    }

    document.getElementById("text").innerHTML = paragraph.join(" ");
    return paragraph.join(" ");
};