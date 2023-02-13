import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

function Menu() {
  return (
    <header className={styles.menu}>
      <h2>Resilia</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/nosso-time">Nosso time</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}

export default Menu
