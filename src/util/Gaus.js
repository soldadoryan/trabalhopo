export const Maximizacao = (listaVariaveis) => {
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

    // verificar se existe valor negativo em z
    Array.from(linhas[linhaPivo].childNodes)[0].textContent = Array.from(linhas[0].childNodes)[colunaPivo].textContent;

    var isNegative = 0;

    Array.from(linhas[linhas.length - 1].childNodes).map(v => {
      if (parseFloat(v.textContent) < 0) { isNegative = 1; return; }
    });

    if (isNegative === 0) {
      document.getElementById("cta").style.display = "none";
      document.querySelector(".hide-li").style.display = "block";

      var append = "";

      listaVariaveis.filter(v => v.type !== 'sobra').map(lv => {
        // console.log(lv.nome);
        linhas.filter((v, i) => (i !== 0) && Array.from(v.childNodes)[0].textContent === lv.nome).map(l => {
          var array_valores = Array.from(l.childNodes);
          append += `<li><b>${array_valores[0].textContent} =</b> ${array_valores[array_valores.length - 1].textContent}</li>`;
        });
      });

      append += `<li><b>${Array.from(linhas[linhas.length - 1].childNodes)[0].textContent} =</b> ${Array.from(linhas[linhas.length - 1].childNodes)[Array.from(linhas[linhas.length - 1].childNodes).length - 1].textContent}</li>`;

      console.log(append);

      document.getElementById('resultado').innerHTML = append;

      return;
    }

    document.getElementById("cta").style.display = "block";

  }, 1000);


  //  LinhaX = LinhaX - ([valor que precisar ser zerado]) * Linha do Pivo;
};

export const Minimizacao = (listaVariaveis) => {
  document.getElementById("cta").style.display = "none";
  // Selecionar o menor valor de z
  const linhas = Array.from(document.getElementById('tabela').rows);
  const lista = Array.from(document.getElementById('lista').childNodes);

  let colunaLimite = Array.from(linhas[0].childNodes).length - 1;

  console.log(colunaLimite);

  let menorValor = Number.MAX_VALUE;
  let indexMenorValor = 0;

  linhas.filter((v, i) => (i !== 0) && (i !== linhas.length - 1)).map((valor, index) => {
    console.log(Array.from(valor.childNodes)[colunaLimite].textContent)

    var valor_analisado = parseFloat(Array.from(valor.childNodes)[colunaLimite].textContent);

    if (valor_analisado < menorValor) {
      menorValor = valor_analisado;
      indexMenorValor = index;
    }
  });
  console.log("Menor valor do limite: " + menorValor);
  console.log("Index do menor valor do limite: " + indexMenorValor);


  // Dividir linha do menor limite pela linha do z

  var linhaZ = Array.from(linhas[linhas.length - 1].childNodes);

  linhaZ.filter((v, i) => i !== linhaZ.length - 1 && i !== 0).map((valor, indexTd) => {
    console.log(indexMenorValor);
    var cmenor = Array.from(linhas[indexMenorValor + 1].childNodes)[indexTd + 1];
    var valor_atual = 0;

    console.log(cmenor);
    console.log(valor);

    if (parseFloat(valor.textContent).toFixed(2) != 0) {
      valor_atual = parseFloat(parseFloat(cmenor.textContent).toFixed(2) / parseFloat(valor.textContent).toFixed(2)).toFixed(2);
    }

    // window.setTimeout(() => {
    console.log(indexTd);

    lista[indexTd].querySelector('span').textContent = valor_atual;
    // }, 1000);
  });

  let menorValorDivisao = Number.MAX_VALUE;
  let indexMenorValorDivisao = 0;

  // pegar o menor valor dos resultados da divisao para selecionar o pivo
  lista.map((item, indexMenor) => {
    if (parseFloat(item.querySelector('span').textContent) < parseFloat(menorValorDivisao)) {
      menorValorDivisao = parseFloat(item.querySelector('span').textContent);
      indexMenorValorDivisao = indexMenor;
    }
  });

  console.log("Menor valor da divisão: " + menorValorDivisao);

  // if (teste == 1)
  //   return;

  let colunaPivo = indexMenorValorDivisao + 1;
  let linhaPivo = indexMenorValor + 1;

  let pivo = Array.from(linhas[linhaPivo].childNodes)[colunaPivo].textContent;

  console.log("pivo: " + pivo);
  // return;

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

    //
    Array.from(linhas[linhaPivo].childNodes)[0].textContent = Array.from(linhas[0].childNodes)[colunaPivo].textContent;

    // verificar se existe valor negativo no limite
    var isNegative = 0;

    linhas.filter((v, i) => i !== linhas.length - 1).map(v => {
      var linha_analisada = Array.from(v.childNodes);

      console.log(linha_analisada[linha_analisada.length - 1].textContent)

      if (parseFloat(linha_analisada[linha_analisada.length - 1].textContent) < 0) { isNegative = 1; return; }
    });



    if (isNegative === 0) {
      document.getElementById("cta").style.display = "none";
      document.querySelector(".hide-li").style.display = "block";

      var append = "";

      listaVariaveis.filter(v => v.type !== 'sobra').map(lv => {
        // console.log(lv.nome);
        linhas.filter((v, i) => (i !== 0) && Array.from(v.childNodes)[0].textContent === lv.nome).map(l => {
          var array_valores = Array.from(l.childNodes);
          append += `<li><b>${array_valores[0].textContent} =</b> ${array_valores[array_valores.length - 1].textContent}</li>`;
        });
      });

      append += `<li><b>${Array.from(linhas[linhas.length - 1].childNodes)[0].textContent} =</b> ${parseFloat(Array.from(linhas[linhas.length - 1].childNodes)[Array.from(linhas[linhas.length - 1].childNodes).length - 1].textContent) * (-1)}</li>`;

      console.log(append);

      document.getElementById('resultado').innerHTML = append;

      return;
    }

    document.getElementById("cta").style.display = "block";

  }, 1000);


  //  LinhaX = LinhaX - ([valor que precisar ser zerado]) * Linha do Pivo;
};