import React from 'react'
import PropTypes from 'prop-types'
import styles from './pagination.module.css'
import LogoutBtn from '../logoutBtn'

const Pagination = props => {

    const {btns, pageNum, handleCurrent, handleAdd, loginAuthOut} = props

    const handleClick = e => {
        e.preventDefault()
        const { target } = e
        handleCurrent(target.id)
    }

    const handleView = e => {
        e.preventDefault()
        handleAdd()
    }

    const rederBtns = btns => {
        const current = Number(pageNum)
        const btnGroup = []
        for(var i = 0; i < btns; i++){
            btnGroup.push(
                <li key={i}> 
                    <button 
                    onClick={handleClick}
                    id={i+1}
                    className={`pagination-link${i+1 === current ? ` is-current` : ``}`}
                    aria-label={`Page ${i+1}`} 
                    aria-current="page">{i+1}
                    </button>
                </li>
            )        
        }
        return btnGroup    
    }

    return(
        <div className={`pagination-list ${styles.pagination}`}>
        <ul className={styles.number_list}>
            {rederBtns(btns)}
        </ul>
            <div className={styles.wrapper_btns}>
                <button 
                onClick={handleView}
                className="button is-info">
                    <span className="icon">
                        <i className="fas fa-user-plus"></i>
                    </span>
                    <span>Add user</span>
                </button>
                <LogoutBtn loginAuthOut={loginAuthOut}/>
            </div>
        </div>
  
    )
}

Pagination.propTypes = {
    btns: PropTypes.number.isRequired,
    pageNum: PropTypes.string.isRequired,
    handleCurrent: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
    loginAuthOut: PropTypes.func.isRequired
}

export default Pagination