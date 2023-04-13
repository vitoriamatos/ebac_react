import { useState } from "react"
import styles from './header.module.css';
const Header = () => {

    return (
        <header className={styles.Header}>
            <div class="container">
                <h1>Calculadora IMC</h1>
            </div>
        </header>
    )
}

export default Header