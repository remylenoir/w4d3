const chalk = require("chalk");

console.log(chalk.blue("Hello world"));

const multiply = (a, b) => a * b;

const factor = multiply(5, 7);
console.log(chalk.bgRed(factor));
