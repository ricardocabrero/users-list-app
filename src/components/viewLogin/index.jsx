import React, { Fragment } from 'react'
import Header from '../header'
import LoginBtn from '../loginBtn'
import styles from './viewLogin.module.css'

const ViewLogin = ({loginAuth}) => {
    return(
        <Fragment>
            <Header title={'Login App'}/>
            <div className={styles.wrapper}>
                <h2 className='title is-5'>Click here to log in</h2>
                <LoginBtn loginAuth={loginAuth}/>
            </div>
        </Fragment>
    )
}

export default ViewLogin