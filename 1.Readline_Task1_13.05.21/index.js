import readline from 'readline';
import askQuestion from './palindromeQuestion.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

askQuestion(rl);