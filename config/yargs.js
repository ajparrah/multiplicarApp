const params = {
  base: {
    demandOption: true,
    alias: 'b',
  },
  limit: {
    alias: 'l',
    default: 10,
  },
};
const argv = require('yargs')
  .command('list', 'Imprime por pantalla la tabla de multiplicación', params)
  .command('file', 'Crea un archivo con la tabla de multiplicar', params)
  .help();
module.exports = {
  argv
};
