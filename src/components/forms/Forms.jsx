import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Form.module.css'

function Form() {
  const [nameValue, setNameValue] = useState('')
  let params = useParams()

  const handleChange = ({ target }) => {
    setNameValue(target.value)
  }

  return (
    <form className={styles.form}>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" onChange={handleChange} />
      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" />
      <label htmlFor="message">Mensagem</label>
      <textarea id="message" />
      {/* <Button text="Enviar" /> */}
      <Button text="Enviar" linkTo={`/contato/${nameValue}`} />
      <p className={styles.successMessage}>
        {params.nomeUsuario &&
          `Recebemos sua mensagem com sucesso ${params.nomeUsuario}!`}
      </p>
    </form>
  )
}

export default Form
