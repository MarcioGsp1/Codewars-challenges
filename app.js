//Challenge 1

//Given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  // Divide a string em um array de números
  const nums = numbers.split(" ").map(Number);
  
  //Encontra os valores máximo e mínimo na array
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  
  // Retorna o resultado como uma string
  return `${max} ${min}`;
}

highAndLow("1 2 3 4 5");

highAndLow("1 2 -3 4 5");

highAndLow("1 9 3 4 -5"); 