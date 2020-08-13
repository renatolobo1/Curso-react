import React from 'react';
import If, {Else} from './If';

export default props => {
  const usuario = props.usuario || {}
  return (
   <div>
     {/* <If test={usuario && usuario.nome}>
     Seja bem vindo <strong>{usuario.nome}</strong>!
     </If>

     <If test={!usuario || !usuario.nome}>
     Seja bem vindo <strong>Anonimo</strong>!
     </If> */}

     <If test={usuario && usuario.nome}>
     Seja bem vindo <strong>{usuario.nome}</strong>!
     <Else>
       Seja Bem vindo <strong>Anonimo</strong>
     </Else>
     </If>
   </div> 
  )
}