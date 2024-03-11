import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

console.log(chalk.blue.bgWhite.bold('SENAI'));

console.log(chalk.blue('curso','de','Node.js'));

console.log(chalk.red('vermelho',chalk.underline.bgBlue('azul')));

console.log(
    `CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}`
);