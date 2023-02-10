function playingCard(face, suit){
    face = face.toUpperCase();
    suit = suit.toUpperCase()
    let validFace = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

    let suitsChars = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    class Card{
        constructor(face, suit){
            this.face = face.toUpperCase();
            this.suit = suitsChars[suit];
        }

        toString(){
            return `${this.face}${this.suit}`;
        }
    }

    if(!(validFace.includes(face.toUpperCase())) || !(suitsChars.hasOwnProperty(`${suit.toUpperCase()}`))){
        throw new Error('Error');
    }

    return new Card(face, suit)
}
console.log(playingCard('A', 'S').toString());
playingCard('10', 'H');
// playingCard('1', 'C');

