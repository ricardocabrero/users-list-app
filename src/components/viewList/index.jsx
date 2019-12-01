import React, {useState, useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import handleStorage from '../../assets/auxFns/session/session'
import UserList from '../userList'
import UserForm from '../userForm'

const ViewList = ({loginAuthOut}) => {

    const [pageNum, setPageNum] = useState('1')
    const [btns, setBtns] = useState(1)
    const [users, setUsers] = useState([])
    const [userEdit, setUserEdit] = useState({})
    const [view, setView] = useState('list')
  
    useEffect(() => {
        const sessionCheck = new handleStorage(pageNum)
        const isSession = sessionCheck.check()
        axios.get(`https://reqres.in/api/users?page=${pageNum}`)
          .then(({data}) => {
            const {total_pages, data: usersReq} = data
            isSession !== null 
            ? setUsers(isSession)
            : setUsers(usersReq) 
            setBtns(total_pages)
            
          })
          .catch(error => {
            console.log(`error:${error.message}`)
          })
     },[pageNum])

    useEffect(() => {
        const updatedSession = new handleStorage(pageNum, users)
        updatedSession.updated()
    })

    const handleView = () => {
        view === 'list' 
        ? setView('form')
        : setView('list')
    } 

    const clearEdit = () => {
        setUserEdit({})
        handleView()        
    }

    const handlePagination = id => {
        setPageNum(id)
    } 

    const addNewUser = user => {
        axios.post(`https://reqres.in/api/users?page=${pageNum}`, user)
        .then(({data}) => {
            const newData = users.concat(data)
            setUsers(newData)
        })
    }

    const updateUser = (id,values) => {
        axios.patch(`https://reqres.in/api/users?page=${id}`, values)
        .then(({data}) => {
            const newData = users.map(x => x.id === id ? values : x)
            setUsers(newData)
        })       
    }

    const handleEdit = id => {
        const userSelect =  users.find(x => x.id === id)
        setUserEdit(userSelect)
        handleView()        
    }

    return(
        <Fragment>
            {view === 'list' && 
            <UserList
            handleUserId={handleEdit}
            btns={btns}
            pageNum={pageNum}
            handleCurrent={handlePagination}
            handleAdd={clearEdit} 
            users={users}
            loginAuthOut={loginAuthOut}/>}
            {view === 'form' && 
            <UserForm 
            handleNewUser={addNewUser}
            handleView={handleView}
            userSelected={userEdit}
            handleUpdateUser={updateUser}/>}
        </Fragment>
    )
}

ViewList.propTypes = {
    loginAuthOut: PropTypes.func.isRequired
}

export default ViewList