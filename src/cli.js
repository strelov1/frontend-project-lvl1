import promptly from 'promptly';


export const greeting = async () => {
    console.log('Welcome to the Brain Games!')
    const name = await promptly.prompt('May I have your name? ');

    console.log(`Hello, ${name}!`)
};