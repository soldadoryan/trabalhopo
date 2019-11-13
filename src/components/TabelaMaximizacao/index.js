import React, { useEffect, useState } from 'react';

import { Table, Button, Lista, WrapListas } from './styles';
import { preencherTabelaMaximizacao } from '../../util/Tabela';
import { Maximizacao } from '../../util/Gaus';

export default function TabelaMaximizacao({ Equacoes }) {

  const [objEquacoes, setObjEquacoes] = useState(Equacoes);
  const [listaVariaveis, setListaVariaveis] = useState([]);
  const [listaVariaveisY, setListaVariaveisY] = useState([]);

  useEffect(() => {
    setListaVariaveis(preencherTabelaMaximizacao(objEquacoes));
  }, []);

  const iniciarMaximizacao = () => {
    Maximizacao(listaVariaveis);
  };

  return (
    <>
      <h1>Simplex de maximização</h1>
      <Button id="cta" onClick={e => iniciarMaximizacao()}>Executar</Button>
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

      <WrapListas>
        <Lista id="lista">
          {
            listaVariaveis.filter(v => v.type === 'sobra').map(linha => (
              <li> {linha.nome}: <span></span></li>
            ))
          }
        </Lista>

        <div>
          <h3>RESULTADOS</h3>
          <Lista id="resultado" className="hide-li">
            {/* <li className="z">Z: <span></span></li> */}
          </Lista>
        </div>
      </WrapListas>
    </>
  );
}
