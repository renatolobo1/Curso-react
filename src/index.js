import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'



ReactDOM.render(
  <div> 
   <Primeiro></Primeiro>
   <ComParametro 
    titulo="Segundo Componente"
    aluno="Renato "
    nota="10.0" 
   />
  </div>, 
  document.getElementById('root')
  );