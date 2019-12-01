import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import Header from '../header'
import styles from './userList.module.css'
import UserItem from '../userItem'
import Pagination from '../pagination'

const UserList = props => {

    const {users, btns, pageNum, handleCurrent, handleAdd, handleUserId, loginAuthOut} = props

    return(
        <Fragment>
            <Header title={'Users List App'}/>
            <ul className={styles.list}>
            {users.map((el,id) => {
                return (
                  <UserItem 
                  handleUserId={handleUserId} 
                  key={id} 
                  user={el}/>
                  )
              })
            }                            
            </ul>
            <Pagination
            btns={btns}
            pageNum={pageNum}
            handleCurrent={handleCurrent}
            handleAdd={handleAdd}
            loginAuthOut={loginAuthOut}/>
        </Fragment>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    btns: PropTypes.number.isRequired,
    pageNum: PropTypes.string.isRequired,
    handleCurrent: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleUserId: PropTypes.func.isRequired,  
}

export default UserList