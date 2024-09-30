function findOccurrences() {
    const sentence = document.getElementById('inputString').value;
    const letter = document.getElementById('inputLetter').value;

    let positions = [];

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === letter.toLowerCase()) {
            positions.push(i+1);
        }
    }

    document.getElementById('outputArray').textContent = positions;
}

