import React, { useState, useEffect } from 'react';

import { Form } from './styles';

export default function Formulario() {
  const [nEquacoes, setNEquacoes] = useState('');
  const [numero, setNumero] = useState('');
  const [variavel, setVariavel] = useState('');
  const [sinal, setSinal] = useState('');

  const [alfabeto, setAlfabeto] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  const [auxSobra, setAuxSobra] = useState([]);

  const [objEquacoes, setObjEquacoes] = useState({
    equacoes: [
      {
        type: 'normal',
        variaveis: [
          {
            numero: 2,
            nome: 'x',
            sinal: '+',
          },
          {
            numero: 1,
            nome: 'y',
            sinal: '+',
          },
        ],
        sinal: '>=',
        limite: 16,
      },
      {
        type: 'normal',
        variaveis: [
          {
            numero: 1,
            nome: 'x',
            sinal: '+',
          },
          {
            numero: 2,
            nome: 'y',
            sinal: '+',
          },
        ],
        sinal: '>=',
        limite: 11,
      },
      {
        type: 'normal',
        variaveis: [
          {
            numero: 1,
            nome: 'x',
            sinal: '+',
          },
          {
            numero: 3,
            nome: 'y',
            sinal: '+',
          },
        ],
        sinal: '>=',
        limite: 15,
      },
      {
        type: 'z',
        variaveis: [
          {
            numero: 30,
            nome: 'x',
            sinal: '+',
          },
          {
            numero: 50,
            nome: 'y',
            sinal: '+',
          },
        ],
        sinal: '',
        limite: 0,
      },
    ]
  });

  useEffect(() => {
    var aux = objEquacoes;
    var auxs = [];

    aux.equacoes.map((equacao, index) => {
      if (equacao.type !== 'z') {
        auxs[index] = alfabeto[index];
        equacao.variaveis.push({
          numero: 1,
          nome: alfabeto[index],
          sinal: ''
        });
      }

    });

    setObjEquacoes(aux);
    setAuxSobra(auxs);
  }, [objEquacoes]);

  return (
    <>
      <Form>
        <input type="text" value={nEquacoes} onChange={e => setNEquacoes(e.target.value)} placeholder="Digite o número de equações" />
        <button type="submit">Enviar</button>
      </Form>
      <table>
        <tr>
          <td>Base</td>
          {objEquacoes.equacoes[0].variaveis.map(variavel => (
            <td>{variavel.nome}</td>
          ))}
          {auxSobra.map(s => (
            <td>{s}</td>
          ))}
          <td>Limite</td>
        </tr>
        {/* {objEquacoes.equacoes.map(equacao => (
        ))} */}
      </table>
    </>
  );
}
