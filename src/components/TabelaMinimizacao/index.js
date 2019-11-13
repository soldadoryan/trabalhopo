import React, { useEffect, useState } from 'react';

import { Table, Button, Lista } from '../TabelaMaximizacao/styles';
import { preencherTabelaMinimizacao } from '../../util/Tabela';
import { Minimizacao } from '../../util/Gaus';

export default function TabelaMinimizacao({ Equacoes }) {

  const [objEquacoes, setObjEquacoes] = useState(Equacoes);
  const [listaVariaveis, setListaVariaveis] = useState([]);
  const [listaVariaveisY, setListaVariaveisY] = useState([]);

  useEffect(() => {
    setListaVariaveis(preencherTabelaMinimizacao(objEquacoes));
  }, []);


  const iniciarMinimizacao = () => {
    Minimizacao(listaVariaveis);
  };

  return (
    <>
      <Button id="cta" onClick={e => iniciarMinimizacao()}>Iniciar Minimizacao</Button>
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
                  <td>{parseFloat(variavel.numero) * (-1)}</td>
                ))
              ))}
              {listaVariaveis.filter(v => v.type === 'sobra').map(auxvariavel => (
                <td>{(auxvariavel.nome === variavel.nome) ? 1 : 0}</td>
              ))}
              {objEquacoes.equacoes.filter(v => v.variavel_sobra === variavel.nome).map(equacao => (
                <td>{parseFloat(equacao.limite) * (-1)}</td>
              ))}
            </tr>
          ))}
          <tr>
            <th>z</th>
            {objEquacoes.equacoes.filter(v => v.type === 'z').map(equacao => (
              equacao.variaveis.map(variavel => (
                <td>{variavel.numero}</td>
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
          listaVariaveis.map(linha => (
            <li> {linha.nome}: <span></span></li>
          ))
        }
      </Lista>

      <Lista id="resultado" className="hide-li">
        {/* <li className="z">Z: <span></span></li> */}
      </Lista>
    </>
  );
}
