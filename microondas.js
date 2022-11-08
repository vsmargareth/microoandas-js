
//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
const readlineSync = require('readline-sync');

console.log(`
  1 - Pipoca – 10 segundos (padrão);
  2 - Macarrão – 8 segundos (padrão);
  3 - Carne – 15 segundos (padrão);
  4 - Feijão – 12 segundos (padrão);
  5 - Brigadeiro – 8 segundos (padrão); 
`);
let opcao = readlineSync.question('escolha uma opcao');
console.log(`O usuário escolheu a opção ${opcao}`);

let tempoDigitado = readlineSync.question('escolha o tempo');



function microondas(opcao, tempo) {
  //if else para opção
  if (opcao == 1) {
    tempo = 10
  } else if (opcao == 2) {
    tempo = 8
  } else if (opcao == 3) {
    tempo = 15
  } else if (opcao == 4) {
    tempo = 12
  } else if (opcao == 5) {
    tempo = 8
  } else {
    console.log("prato inexistente")
    return
  }


  //if else para tempo

  let tempoLimite = (2 * tempo);
  let tempoKabum = (3 * tempo);

  if (tempoDigitado > tempoLimite) {
    console.log("comida queimou.")
  } else if (tempoDigitado < tempo) {
    console.log("tempo insuficiente")
  } else if (tempoDigitado > tempoKabum) {
    console.log("Kabummm!")
  }

  console.log('passou aqui')
}

microondas(opcao, tempoDigitado)

console.log('Prato pronto, bom apetite!!!')