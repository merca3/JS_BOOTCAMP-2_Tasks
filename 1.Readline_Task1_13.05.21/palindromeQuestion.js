// const someFunction = () => {        - arrow function

// }



const palindrome = (phrase) => {
    let phraseReversed = phrase
        .toLowerCase()
        .replace(/ /g, '')
        .split('')
        .reverse()
        .join('');

    if (phrase.replace(/ /g, '').toLowerCase() === phraseReversed) {
        console.log(`Phrase "${phrase}" is a polindrome`);
    } else {
        console.log(`Phrase "${phrase}" is NOT a polindrome`);
    }
}

const askQuestion = (rl) => { // recursive function
    // console.log('(Enter "exit" when done)')
    rl.question('Please enter a phrase: ', (answer) => {
        if (answer.toLowerCase() === 'exit') {
            console.log('Ok, bye!');
            rl.close();
            return;
        }
        palindrome(answer);
        askQuestion(rl);
        // rl.close();
    })
};

export default askQuestion;