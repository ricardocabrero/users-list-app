import React from 'react'
import PropTypes from 'prop-types'
import styles from './header.module.css'

const Header = ({title}) => {
    return(
        <header className={styles.header}>
            <h1 className='title is-4'>{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header