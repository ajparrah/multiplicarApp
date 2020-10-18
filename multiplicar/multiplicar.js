const fs = require('fs');// FyleSytem by Node
const printList = (base, limit) => {
  if(!Number(base) || !Number(limit)) {
    console.log('Ha ingresado un valor invalido');
    return;
  }
  const data = operate(base, limit);
  console.log(data);
};

const createFileWithBase = (base, limit) => {
  return new Promise((resolve, reject) => {
    if(!Number(base) || !Number(limit)) {
      reject(`Ha ingresado un valor invalido`);
      return; // Nothing
    }
    const data = operate(base, limit);
    fs.writeFile(`tablas/tablaMultiplicacion${base}.txt`, data, (error) => {
      if (error){ 
        reject(error);
      } else {
        resolve(`tablaMultiplicacion${base}.txt`);
      }
    });
  });
};

const operate = (base, limit) => {
  let result = '';
  for (let i = 1; i <= limit; i++) {
    result += `${base} * ${i} = ${base * i}\n`;
  }
  return result;
};

module.exports = {
  createFileWithBase,
  printList,
};
