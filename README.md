# Simplex Maximizacao

## Montar a tabela

1. pedir numero de equacoes;
2. montar a tabela de acordo com classroom;
3. negar a linha do z;

## Gaus

1. Escolher a coluna de menor valor negativo da linha do z;
2. Pegar o valor da coluna selecionada e dividir pelo limite da sua linha;
3. Selecionar a linha do menor valor positivo dos resultados e assim, verificar o cruzamento com a coluna e selecionar o pivo;
4. Verificar se o pivo escolhido vale 1;
  4.1. Se sim: continuar gaus;
  4.1. Se não: Dividir a linha inteira pelo valor do pivo escolhido;
5. Subtrair todas as outras linhas pela linha do pivo até zerar a coluna do pivo(menos ele).
  5.1. Aplicar fórmula em todas as linhas que não são a do pivo: LinhaX = LinhaX - (valor que precisar ser zerado) * Linha do Pivo
6. Trocar nome da linha do pivo por nome da coluna do pivo;
7. Verificar se a linha do z possuiu valores negativos;
  7.1 Se sim: Repetir todo o Gaus;
  7.1 Se não: Terminar algorítimo e mostrar resultados;
    7.1.1 Os resultados serão: símbolo(letra) coluna base = valor da coluna do limite;
    7.1.2 Se caso algum valor(x ou y) não estiver na coluna base, este valor é setado como 0;
    7.1.3 Lembrando que símbolos(letras) que representam as variáveis de excesso não são resultados finais;




# Simplex Minimização

## Montar a tabela

1. pedir numero de equacoes;
2. montar a tabela de acordo com classroom;
3. negar todos os valores das equacões, exceto as variáveis de excesso que ficarão positivas e deixar positivo a linha do Z;

## Gaus

1. Escolher o menor valor da coluna do Limite;
2. A linha do limite selecionado deve ser toda dividida pela linha do Z.
  2.1 Selecionar o menor valor dessa divisão e selecionar a coluna correspondente.
3. Após selecionar linha e coluna, verificar o cruzamento e selecionar o pivo;
4. Verificar se o pivo escolhido vale 1;
  4.1. Se sim: continuar gaus;
  4.2. Se não: Dividir a linha inteira pelo valor do pivo escolhido;
5. Zerar todos os valores da coluna menos o pivo;
  5.1. (Repetir em todas as linhas menos a do pivo) Aplicar formula: LinhaX = LinhaX - (valor que precisar ser zerado) * LinhaPIVO;
6. Trocar nome da linha do pivo por nome da coluna do pivo;
7. Verificar se a coluna do Limite possui todos os valores positivos(exceto linha do Z);
  7.1 Se sim: Mostrar tabela certa e valor das variaveis normais e z;
  7.2 O valor das variáveis agora estarão na coluna do Limite, logo os valores positivos.

EXEMPLO QUE ESTÁ NA MINHA PROVA, ACERTEI A QUESTÃO TODA, ENTÃO ABAIXO ESTÁ O RESULTADO PARA TESTAR:

MinZ = 4x+5y
       4x+7y >= 28
       6x+3y >= 18
Resultado com apenas 2 casas decimais:
x = 1,39
y = 3,21
z = 18,41
--fazendo no codigo provavelmente vai trazer a resposta com mais casas decimas.


