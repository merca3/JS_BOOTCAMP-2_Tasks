import { accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/atm_amount.json`;

rl.question('Do you want to add (+) or withdraw (-)? ', (answer) => {
    if (answer !== '+' && answer !== '-') {
        console.log('Start again!');
        console.log('Please enter + or - !');
        rl.close();
        // return;  <-- probably a better use instead of adding else
    } else {
        rl.question('How much? ', (amountToChange) => {
            const answerAsNumber = parseFloat(amountToChange);
            if (isNaN(amountToChange)) {
                console.log('Please enter a number!');
                console.log('Start again!');
                rl.close();
                return;
            }
            try {
                accessSync(filePath);
                const jsonObject = readFileSync(filePath, 'utf8');
                const transactions = JSON.parse(jsonObject);
                const newLogEntry = {
                    action: answer,
                    amount: answerAsNumber
                }
                transactions.push(newLogEntry);
                writeFileSync(filePath, JSON.stringify(transactions));

                let balance = 0;
                for (let transaction of transactions) {
                    if (transaction.action === '+') {
                        balance += transaction.amount;
                    } else {
                        balance -= transaction.amount;
                    }
                }
                // if (answer === '+') {
                //     decodedAmount.amount += parseFloat(amountToChange);
                // } else {
                //     decodedAmount.amount -= parseFloat(amountToChange);
                // };

                console.log(`Current balance is: ${balance}`);
                rl.close();

            } catch (err) {
                console.error('Something went wrong', err);
                rl.close();
            };
        })
    }
})