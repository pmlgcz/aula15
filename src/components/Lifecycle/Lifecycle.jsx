import React, { useEffect, useState } from 'react'
import './Lifecycle.css'

// funcao apenas para logs de atualizacao
function logUpdate(clickNumber) {
  if (clickNumber === 0)
    console.log('Estado iniciado, contador está valendo zero.')
  else if (clickNumber === 1)
    console.log(`Atualizou o estado! Usuário clicou 1 vez`)
  else console.log(`Atualizou o estado! Usuário clicou ${clickNumber} vezes`)
}

// componente que vai ser desmontado
function UnmountComponent({ text }) {
  useEffect(() => {
    // como o array esta vazio, podemos observar a montagem também
    console.log('Componente foi montado')
    // ao fazermos esse retorno, observamos a desmontagem
    return () => console.log('Componente foi desmontado')
  }, [])
  return <p>{text}</p>
}

function Lifecycle() {
  const [click, setClick] = useState(0)
  const [unmount, setUnmount] = useState(false)

  const handleClick = () => {
    setClick(click + 1)
  }

  const handleUnmount = () => {
    setUnmount(!unmount)
  }

  /*
    array de dependencias vazio o efeito roda
    apenas na primeira renderizacao
  */
  useEffect(() => {
    console.log('Primeira renderização ocorreu!')
  }, [])

  /*
    array de dependencias com dependencia(s)
    o efeito roda a cada alteracao sofrida
  */
  useEffect(() => {
    logUpdate(click)
  }, [click])

  return (
    <div className="lifecycle">
      <p>Componente para avaliar efeitos colaterais</p>
      {click > 0 && <p className="alert">Confira os logs no console</p>}
      <button onClick={handleClick}>Clique para me atualizar</button>
      <button onClick={handleUnmount}>
        {unmount ? 'Clique para me montar' : 'Clique para me desmontar'}
      </button>
      {/* se estado nao for unmount, entao sera montado */}
      {!unmount && <UnmountComponent text="Componente montado" />}
    </div>
  )
}

export default Lifecycle
