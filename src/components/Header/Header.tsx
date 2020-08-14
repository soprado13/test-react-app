import React from 'react'
import styles from './header.module.scss'
import logo from'../../logo.svg'

const Header = () => {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Test app" className={styles.logo} />
            <h2 className={styles.hedaing}>White lives matter</h2>
        </header>
    )
}

export default Header