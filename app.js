const message = {
    firstPiece: ['early morning', 'late morning', 'early afternoon'],
    secondPiece: ['Billie Eilish', 'Ed Sheeran', 'Diplo', 'Dennis Lloyd', 'Dua Lipa', 'Foster the People', "Guns N' Roses", 'Heyden James', 'Hippie Sabotage', 'Lucky Luke'],
    thirdPiece: ['a good restaurant', 'the zoo', 'to Disney', 'a museum', "your artist's concert"],
    fourthPiece: ['a glass of wine', 'a relaxing night walk', 'a nice carajillo', 'a match of LoL']
}

let messagePieces = [];

let randomNumber = () => {
    return Math.floor(Math.random() * 10);
}

let chooseMessageOptions = (obj) => {
    let randomIndex = randomNumber();
    while (messagePieces.length < 4) {
        for (let piece in obj) {
            if (piece === 'firstPiece') {
                let firstPiece = obj[piece][randomIndex];
                while (firstPiece === undefined) {
                    randomIndex = randomNumber();
                    firstPiece = obj[piece][randomIndex];
                }
                messagePieces.push(firstPiece);
            } else if (piece === 'secondPiece') {
                randomIndex = randomNumber();
                let secondPiece = obj[piece][randomIndex];
                while (secondPiece === undefined) {
                    randomIndex = randomNumber();
                    secondPiece = obj[piece][randomIndex];
                }
                messagePieces.push(secondPiece);
            } else if (piece === 'thirdPiece') {
                randomIndex = randomNumber();
                let thirdPiece = obj[piece][randomIndex];
                while (thirdPiece === undefined) {
                    randomIndex = randomNumber();
                    thirdPiece = obj[piece][randomIndex];
                }
                messagePieces.push(thirdPiece);
            }else if (piece === 'fourthPiece') {
                randomIndex = randomNumber();
                let fourthPiece = obj[piece][randomIndex];
                while (fourthPiece === undefined) {
                    randomIndex = randomNumber();
                    fourthPiece = obj[piece][randomIndex];
                }
                messagePieces.push(fourthPiece);
            }
        }
    }
    return messagePieces;
}