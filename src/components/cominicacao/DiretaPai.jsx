import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
  return(
    
    <div>
      <DiretaFilho nome="Matheus" idade={20} nerd={true}/>
      <DiretaFilho nome="Renato" idade={14} nerd={false}/>
    </div>
  )
}