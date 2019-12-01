import React from 'react'
import PropTypes from 'prop-types'
import styles from './logoutBtn.module.css'

const LogoutBtn = ({loginAuthOut}) => {
    
    return(
        <button
        onClick={loginAuthOut}
        className={`button is-info ${styles.logout}`}>
            <span className="icon">
                <i className="fas fa-sign-out-alt"></i>
            </span>
        </button>
    )
}

LogoutBtn.propTypes = {
    loginAuthOut: PropTypes.func.isRequired
}

export default LogoutBtn