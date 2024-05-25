//importa o conjunto de elmentos React
import React from 'react'
import Topo from './components/Topo';
import Corpo from './components/Corpo';




//exporta ao passo que cria o componente
export default function App () {
  return (
    //não é necessário específicar um tag aqui.
    //mas utilizar uma tbm funcionar ex: <div> </div>
    <>

      <Topo/>
      <Corpo/>
     
      
    </>
  )
}

