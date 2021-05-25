import readline from 'readline';
import { accessSync, writeFileSync } from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askFirstName = async() => {
    return new Promise((fulfill, reject) => {
        rl.question('Enter your first name: ', (firstName) => {
            if (firstName === '') {
                reject('Please fill the first name');
                return;
            }
            fulfill(firstName);
        })
    });
}
const askLastName = async() => {
    return new Promise((fulfill, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Please fill the last name');
                return;
            }
            fulfill(lastName);
        })
    });
}
const askEmail = async() => {
    return new Promise((fulfill, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Please fill the email');
                return;
            }
            fulfill(email);
        })
    });
}
const askAge = async() => {
    return new Promise((fulfill, reject) => {
        rl.question('Enter your age: ', (age) => {
            if (age === '') {
                reject('Please fill the age');
                return;
            }
            if (isNaN(age)) {
                reject('Age should be a number');
                return;
            }
            if (parseInt(age) < 0) {
                reject('Age should be valid');
                return;
            }
            fulfill(parseInt(age));
        })
    });
}
const askAdress = async() => {
    return new Promise((fulfill, reject) => {
        rl.question('Enter your adress: ', (adress) => {
            if (adress === '') {
                reject('Please fill the adress');
                return;
            }
            fulfill(adress);
        })
    });
}

const filePath = `${process.cwd()}/data.json`;

try {
    const firstName = await askFirstName();
    const lastName = await askLastName();
    const email = await askEmail();
    const age = await askAge();
    const adress = await askAdress();
    console.log(`The data is: ${firstName}, ${lastName}, ${email}, ${age}, ${adress}`);

    const newData = {
        firstName,
        lastName,
        email,
        age,
        adress,
    }

    accessSync(filePath);
    writeFileSync(filePath, JSON.stringify(newData));

} catch (e) {
    console.log(`Whoops, something went wrong. The error is: ${e}`);
}

rl.close();