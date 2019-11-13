import React from 'react';
import Equacoes from '../../util/Equacoes';

import AppStyle from '../../AppStyle';

import TabelaMaximizacao from '../../components/TabelaMaximizacao';

function Maximizacao() {
  return (
    <>
      <AppStyle />
      <TabelaMaximizacao Equacoes={Equacoes} />
    </>
  );
}

export default Maximizacao;
