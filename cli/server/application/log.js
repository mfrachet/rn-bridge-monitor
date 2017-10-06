const chalk = require("chalk");

const log = (categ, message) => {
  const coloredCateg = chalk.green(`[${categ}] `);
  console.log(coloredCateg + message);
};

const logWarn = (categ, message) => {
  const coloredCateg = chalk.red(`[${categ}] `);
  console.log(coloredCateg + message);
};

const logImportant = (categ, message, focus) => {
  const coloredCateg = chalk.blueBright(`[${categ}] ${message} `);
  const coloredFocus = chalk.cyanBright(focus);
  console.log(coloredCateg + coloredFocus);
};

module.exports = {
  log,
  logWarn,
  logImportant
};
