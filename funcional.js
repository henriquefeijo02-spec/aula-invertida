const numeros = [10, 20, 30, 40];

const total = numeros.reduce((acumulador, valorAtual) => {
  console.log(`acc: ${acumulador}, atual: ${valorAtual}`);
  return acumulador + valorAtual;
}, 0);

console.log("Resultado (Funcional):", total);
