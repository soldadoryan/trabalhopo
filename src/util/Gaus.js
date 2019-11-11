export const Maximizacao = (teste = 0) => {
  document.getElementById("cta").style.display = "none";
  // Selecionar o menor valor de z
  const linhas = Array.from(document.getElementById('tabela').rows);
  const lista = Array.from(document.getElementById('lista').childNodes);

  let linhaZ = linhas[linhas.length - 1];

  let menorValor = Number.MAX_VALUE;
  let indexMenorValor = 0;


  Array.from(linhaZ.childNodes).map((valor, index) => {
    if (parseInt(valor.textContent) < menorValor) {
      menorValor = parseInt(valor.textContent);
      indexMenorValor = index - 1;
    }
  });
  console.log("Menor valor de z: " + menorValor);

  // Dividir limite da linha do valor dividido pelo valores da coluna do menor valor;


  linhas.map((linha, indexTr) => {
    if (Array.from(linha.childNodes)[0].textContent !== 'z') {

      Array.from(linha.childNodes).filter(v => v.tagName === 'TD').map((valor, indexTd) => {
        if (indexTd === indexMenorValor) {

          let limite = Array.from(linha.childNodes)[linha.childNodes.length - 1];

          // console.log("Dividir isso:");
          // console.log(limite);
          // console.log("por isso:");
          // console.log(valor)

          var valor_atual = 0;

          if (parseFloat(valor.textContent).toFixed(2) != 0) {
            valor_atual = (parseFloat(limite.textContent).toFixed(2) / parseFloat(valor.textContent).toFixed(2)).toFixed(2);
          }

          // window.setTimeout(() => {

          lista[indexTr - 1].querySelector('span').textContent = valor_atual;
          // }, 1000);
        }
      });
    }
  });

  let menorValorDivisao = Number.MAX_VALUE;
  let indexMenorValorDivisao = 0;

  // pegar o menor valor dos resultados da divisao para selecionar o pivo
  lista.map((item, indexMenor) => {
    if (parseFloat(item.querySelector('span').textContent) > 0) {
      if (parseFloat(item.querySelector('span').textContent) < parseFloat(menorValorDivisao)) {
        menorValorDivisao = parseFloat(item.querySelector('span').textContent);
        indexMenorValorDivisao = indexMenor;
      }
    }
  });

  console.log("Menor valor da divisão: " + menorValorDivisao);

  // if (teste == 1)
  //   return;

  let linhaPivo = indexMenorValorDivisao + 1;
  let colunaPivo = indexMenorValor + 1;

  let pivo = Array.from(linhas[linhaPivo].childNodes)[colunaPivo].textContent;

  console.log("pivo: " + pivo);

  // Se o pivo nao for 1, dividir sua linha por ele
  if (pivo !== 1) {
    Array.from(linhas[linhaPivo].childNodes).filter((v, i) => i !== 0).map(td => {
      td.textContent = td.textContent / pivo;
    });
  }

  let valorLinhaPivo = 0;

  linhas.filter((v, i) => i !== 0 && i !== linhaPivo).map((l, ir) => {
    Array.from(l.childNodes).filter((v, i) => i !== 0).map((c, i) => {

      valorLinhaPivo = Array.from(linhas[linhaPivo].childNodes)[i + 1];
      // console.log("Valor que eu quero zerar na coluna do pivo");
      // console.log(Array.from(linha.childNodes)[colunaPivo]);
      // console.log("LinhaX");
      // console.log(td);
      // console.log("Linha do pivo")
      // console.log(valorLinhaPivo);

      // console.log("Index Row: " + indexRow + " index Column: " + indexColumn + " Valor total: " + (parseFloat(td.textContent) - (parseFloat(Array.from(linha.childNodes)[colunaPivo].textContent) * parseFloat(valorLinhaPivo.textContent))));

      // Array.from(linhas[((indexRow + 1) === linhaPivo) ? indexRow + 2 : indexRow + 1].childNodes)[indexColumn + 1].textContent = (parseFloat(td.textContent) - (parseFloat(Array.from(linha.childNodes)[colunaPivo].textContent) * parseFloat(valorLinhaPivo.textContent)));

      // let linhanovapivo_aux = (-(parseFloat(Array.from(linha.childNodes)[colunaPivo].textContent)) * parseFloat(valorLinhaPivo.textContent))
      // td.textContent = parseFloat(td.textContent) + linhanovapivo_aux;

      var valor_total = 0;

      let multiplicacao = (parseFloat(Array.from(l.childNodes)[colunaPivo].textContent) * parseFloat(valorLinhaPivo.textContent));
      valor_total = parseFloat(c.textContent) - multiplicacao;
      // console.log(parseFloat(c.textContent) + " - " + (parseFloat(Array.from(l.childNodes)[colunaPivo].textContent) + " * " + parseFloat(valorLinhaPivo.textContent) + " = " + valor_total));

      // console.log("Inserindo " + valor_total + " em:");
      // console.log(c);

      // console.log(valor_total);

      window.setTimeout(() => {
        c.textContent = valor_total;
      }, 1000);

      // console.log(c.textContent);
      // let valor = (parseFloat(td.textContent) - ;
      // td.textContent = " ";
      // td.textContent = valor;
    });
  });

  window.setTimeout(() => {

    Array.from(linhas[linhaPivo].childNodes)[0].textContent = Array.from(linhas[0].childNodes)[colunaPivo].textContent;

    var isNegative = 0;

    Array.from(linhas[linhas.length - 1].childNodes).map(v => {
      if (parseFloat(v.textContent) < 0) { isNegative = 1; return; }
    });

    console.log(isNegative);
    if (isNegative === 0) {
      document.getElementById("cta").style.display = "none";
      document.querySelector(".hide-li").style.display = "block";
      return;
    }

    document.getElementById("cta").style.display = "block";

  }, 1000);



  //  LinhaX = LinhaX - ([valor que precisar ser zerado]) * Linha do Pivo;
};