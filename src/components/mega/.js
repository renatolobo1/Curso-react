


function gerarNumerosNaoContido(min, max, array){
  const aleatorio = parseInt(Math.random() * (max+1 - min))+min
  return array.includes(aleatorio) ?
  gerarNumerosNaoContido(min, max, array) :
  aleatorio
}


function gerarNUmeros(qtde){
  const numeros = Array(qtde)
  .fill(0)
  .reduce((nums)=>{
    const novoNumero = gerarNumerosNaoContido(1,60, nums)
    return [...nums, novoNumero]
  }, [])
  return [3, 13, 43, 51, 53, 55, 59]
}

console.logo(gerarNUmeros(7))

console.log(gerarNumerosNaoContido(1, 5,[1,2,3]))