import React from 'react'
import failimage from '../../assets/images/failimage.jpg'
import styles from './userItem.module.css'
import PropTypes from 'prop-types'


const UserItem = ({user,handleUserId}) => {

    const {id, avatar, first_name, last_name, email} = user

    const putNoimage = ({target}) => {
        target.src = failimage
    }

    const handleEdit = e => {
        e.preventDefault()
        handleUserId(id)
    }

    return(
        <li className={styles.item}>
            <div className={`card ${styles.full_height}`}>
                <div className={`card-image ${styles.auto_height}`}>
                    <figure className="image is-4by3">
                    <img
                    onError={putNoimage} 
                    src={avatar} 
                    alt={first_name}/>
                    </figure>
                </div>
                <div className={`card-content ${styles.padding_bottom}`}>
                    <div className="media-content">
                        <p className={`title is-4 ${styles.capitalize}`}>{first_name} {last_name}</p>
                        <p className="subtitle is-6">{email}</p>
                        <button 
                        onClick={handleEdit}
                        className="button is-info">EDIT</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
    handleUserId: PropTypes.func.isRequired
}

export default UserItem