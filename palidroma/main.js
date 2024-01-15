let word = prompt("write palindromous word");
console.log(word);
let arrayWord = Array.from(word);

function reverse(){
    let newWord = ""; 
    for (let i = arrayWord.length -1; i >= 0; i--){
        newWord += arrayWord[i]
    }
    if (word === newWord){
        alert("the word is palindromous!")
    } else {
        alert("retry, the word is not palindromous!")
    }
}

reverse(arrayWord)