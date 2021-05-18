import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/atm_amount.json`;

// const doMoney = (operator, old, toAdd) => {
//     let newAmount;
//     if (operator === '+') {
//         newAmount = old + toAdd;
//     } else if (operator === '-') {
//         newAmount = old + toAdd;
//     } else {
//         console.log('Start again and Please enter + or = !');
//     }
//     return newAmount;
// }


rl.question('Do you want to add (+) or withdraw (-)? ', (answer) => {
    if (answer !== '+' && answer !== '-') {
        console.log('Please enter + or - !');
        console.log('Start again!');
        rl.close();
    } else {
        rl.question('How much? ', (amountToChange) => {
            try {
                accessSync(filePath);
                const jsonAmount = readFileSync(filePath, 'utf8');
                const decodedAmount = JSON.parse(jsonAmount);

                if (answer === '+') {
                    decodedAmount.amount = decodedAmount.amount + parseInt(amountToChange);
                } else {
                    decodedAmount.amount = decodedAmount.amount - parseInt(amountToChange);
                };

                writeFileSync(filePath, JSON.stringify(decodedAmount));
                console.log(`Current balance is: ${decodedAmount.amount}`);
                rl.close();

            } catch (err) {
                console.error('Something went wrong', err);
            };
        })
    }
})