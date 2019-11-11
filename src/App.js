import React from 'react';
import Equacoes from './util/EquacoesLu1';

import AppStyle from './AppStyle';

import Tabela from './components/Tabela';

function App() {
  return (
    <>
      <AppStyle />
      <Tabela Equacoes={Equacoes} />
    </>
  );
}

export default App;
