import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {
  const [nome, setNome] = useState('Pedro')
  const [idade, setIdade] = useState(10)
  const [nerd, setNerd] = useState(true)

  function fornecerInformacoes(nome, idade, nerd){
    setNome(nome) 
    setIdade(idade) 
    setNerd(nerd)
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