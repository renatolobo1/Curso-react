import React from 'react';

export default (props) => {

  const min = 0
  const max= 100
  const getRandomArbitrary = () => parseInt(Math.random()*(max-min)) + min
  
  return (
    <div>
     {getRandomArbitrary}
    </div>
  )
}



