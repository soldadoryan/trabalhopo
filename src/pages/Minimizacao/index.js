import React from 'react';
import Equacoes from '../../util/Equacoes';

import AppStyle from '../../AppStyle';

import TabelaMinimizacao from '../../components/TabelaMinimizacao';

function Minimizacao() {
  return (
    <>
      <AppStyle />
      <TabelaMinimizacao Equacoes={Equacoes} />
    </>
  );
}

export default Minimizacao;
