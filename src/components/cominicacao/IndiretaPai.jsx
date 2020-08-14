import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {
  let nome = '?'
  let idade = 0
  let nerd = false

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
   nome = nomeParam
   idade = idadeParam
   nerd= nerdParam
}

  return(
    
    <div>
      <div>
        <span>{nome} </span>
        <span>{idade}</span>
        <span> {nerd ? 'verdadeiro' : 'Falso'}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
      
    </div>
  )
}