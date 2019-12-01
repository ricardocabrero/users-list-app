import React from 'react'
import styles from './loginBtn.module.css'

const LoginBtn = ({loginAuth}) => {
    
    return(
        <button 
        onClick={loginAuth}
        className="button">
            <span className={`icon ${styles.color}`}>
                <i className="fab fa-google"></i>
            </span>
            <span>gmail</span>
        </button>
    )
}

export default LoginBtn