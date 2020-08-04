import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default props => {
  return (
    <div>
     <FamiliaMembro nome="Renato" sobrenome={props.sobrenome}/>
     <FamiliaMembro nome="Gustavo" {...props}/>
     <FamiliaMembro nome="Petriane" sobrenome="Lôbo"/>
    </div>
  )
}