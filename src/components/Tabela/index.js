import React, { useEffect, useState } from 'react';

import { Table, Button, Lista } from './styles';
import { preencherTabelaX } from '../../util/Tabela';
import { Maximizacao } from '../../util/Gaus';

export default function Tabela({ Equacoes }) {

  const [objEquacoes, setObjEquacoes] = useState(Equacoes);
  const [listaVariaveis, setListaVariaveis] = useState([]);
  const [listaVariaveisY, setListaVariaveisY] = useState([]);

  useEffect(() => {
    setListaVariaveis(preencherTabelaX(objEquacoes));
  }, []);

  const iniciarMaximizacao = () => {
    Maximizacao();
  };

  return (
    <>
      <h3>Linhax = Linhax - (valor que precisa ser zerado da coluna do pivo) * valor da linha do pivo correspondente</h3>
      <Button id="cta" onClick={e => iniciarMaximizacao()}>Iniciar Maximizacao</Button>
      <Table id="tabela" className="table table-striped">
        <tbody>
          <tr>
            <th>Base</th>
            {listaVariaveis.map(variavel => (
              <th>{variavel.nome}</th>
            ))}
            <th>Limite</th>
          </tr>
          {listaVariaveis.filter(v => v.type === 'sobra').map(variavel => (
            <tr>
              <th>{variavel.nome}</th>
              {objEquacoes.equacoes.filter(v => v.variavel_sobra === variavel.nome).map(equacao => (
                equacao.variaveis.filter(v => v.type === 'normal').map(variavel => (
                  <td>{variavel.numero}</td>
                ))
              ))}
              {listaVariaveis.filter(v => v.type === 'sobra').map(auxvariavel => (
                <td>{(auxvariavel.nome === variavel.nome) ? 1 : 0}</td>
              ))}
              {objEquacoes.equacoes.filter(v => v.variavel_sobra === variavel.nome).map(equacao => (
                <td>{equacao.limite}</td>
              ))}
            </tr>
          ))}
          <tr>
            <th>z</th>
            {objEquacoes.equacoes.filter(v => v.type === 'z').map(equacao => (
              equacao.variaveis.map(variavel => (
                <td>{(variavel.numero != 0) ? '-' + variavel.numero : variavel.numero}</td>
              ))
            ))}
            {objEquacoes.equacoes.filter(v => v.type !== 'z').map(() => (<td>0</td>))}
            {objEquacoes.equacoes.filter(v => v.type === 'z').map(equacao => (
              <td>{equacao.limite}</td>
            ))}
          </tr>
        </tbody>
      </Table >

      <Lista id="lista">
        {
          listaVariaveis.filter(v => v.type === 'sobra').map(linha => (
            <li> {linha.nome}: <span></span></li>
          ))
        }
      </Lista>

      <Lista id="resultado" className="hide-li">
        {listaVariaveis.filter(v => v.type === 'normal' || v.type === 'z').map(linha => (
          <li> {linha.nome}: <span></span></li>
        ))}
        <li>Z: <span></span></li>
      </Lista>
    </>
  );
}
