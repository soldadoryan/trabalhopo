export const preencherTabelaX = (objEquacoes) => {
  var auxListaVariaveis = [];
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  objEquacoes.equacoes.map((equacao, index) => {
    if (equacao.type !== 'z') {
      equacao.variavel_sobra = alfabeto[index];
      equacao.variaveis.push({
        numero: 1,
        nome: alfabeto[index],
        sinal: ''
      });
    }
    equacao.variaveis.map(variavel => {
      if (!auxListaVariaveis.find(auxVar => auxVar.nome === variavel.nome)) {
        auxListaVariaveis.push({
          nome: variavel.nome,
          type: (variavel.type == 'normal') ? 'normal' : 'sobra',
        });
      }
    });
  });

  return auxListaVariaveis;
};