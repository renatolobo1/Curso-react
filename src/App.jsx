import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default () => (
  < div id="app" >
    <h1> Fundamentos React </h1>
    <Fragmento />
    <ComParametro
      titulo="Segundo Componente"
      aluno="Renato "
      nota="10.0"
    />
    <Primeiro></Primeiro>
  </div >
);

