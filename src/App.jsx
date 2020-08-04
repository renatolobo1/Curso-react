import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Aleatório from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default () => (
  <div className="App">
    <h1> Fundamentos React </h1>
    <div className="Cards">

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatório min={1} max={60} />

      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Renato "
          nota={10.0}
        />
      </Card>

      <Card titulo="#01 - Primeiro Desafio" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>

  </div>
);