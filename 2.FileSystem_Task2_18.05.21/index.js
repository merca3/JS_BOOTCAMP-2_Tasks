import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/name.txt`;

try {
    accessSync(filePath);
    const name = readFileSync(filePath, 'utf8');
    console.log(`Current name is: ${name}`);
    rl.question('Please enter a new name: ', (answer) => {
        writeFileSync(filePath, answer);
        console.log(`New name is: ${answer}`)
        rl.close();
    });
} catch (err) {
    console.error('Something went wrong', err)
}