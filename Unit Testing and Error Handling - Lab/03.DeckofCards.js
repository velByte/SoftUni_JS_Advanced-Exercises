function printDeckOfCards(cards) {
    function createCard (face, suit){
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
      
      let result = [];

      cards.forEach(item => {
        let splitetItem = item.split(/([0-9A-Za-z]{1,2})([A-Za-z])/gm)
        let face = splitetItem[1];
        let suit = splitetItem[2]
        try {
            let cardObj = createCard(face, suit);
            result.push(cardObj.toString());
        } catch (error) {
            console.log(`Invalid card: ${face}${suit}`);
        }
      })
      

      console.log(result.join(' '))
  }
  

  printDeckOfCards(['AS', '10D', 'KH', '2C']);
  printDeckOfCards(['5S', 'AAD', 'QD', '1B']);
  printDeckOfCards(['AS', '10D', 'KH', '2C']);
  printDeckOfCards(['AS', '10D', 'KH', '2C']);