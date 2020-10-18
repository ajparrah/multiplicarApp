const { argv } = require('./config/yargs').argv;
const colors = require('colors');
const { createFileWithBase, printList } = require('./multiplicar/multiplicar');

const executeAction = (command) => {
  switch (command) {
    case 'list':
      printList(argv.base, argv.limit);
      break;
    case 'file':
      createFileWithBase(argv.base, argv.limit)
        .then((fileName) => console.log(`Ha sido creado correctamente el archivo: ${colors.green(fileName)}`))
        .catch((error) => console.log(error));
      break;
    default:
        console.log('Ha introducido un comando invalido');
      break;
  }
};
executeAction(argv._[0]);
