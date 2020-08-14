import React from 'react';

export default props => {
  const min = 10
  const max = 60
  const gerarIdade = () => parseInt(Math.random()*(max-min)) + min
  const gerarNerd = () => Math.random() >0.5
  return(
    <div>
      <div>Filho</div>
      <button onClick={
        function (e) {
          props.quandoClicar('joão', gerarIdade() , gerarNerd())
        }
      }>
        Fornecer Informações
      </button>
    </div>
  )
}