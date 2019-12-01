import React, {useState, Fragment} from 'react'
import validate from '../../assets/auxFns/validate/validate'
import fakeImage from '../../assets/auxFns/fakeImage/fakeImage'
import PropTypes from 'prop-types'
import Header from '../header'
import styles from './form.module.css'

const UserForm = props => {

    const {handleView, handleNewUser, userSelected, handleUpdateUser} = props
    const {first_name, last_name, avatar, email, id} = userSelected 

    const [values, setValues] = useState({
        first_name,
        last_name,
        email,
        avatar,
        id
    })

    const [fails, setFails] = useState({})
    
    const handleSubmit = e => {
        e.preventDefault()
        const resultsErrors = validate(values)
        const resultsLength = Object.keys(resultsErrors).length
        if(resultsLength !== 0){
            setFails(resultsErrors)
        }
        else{
            setValues(values)
            id ? handleUpdateUser(id,values)
            : handleNewUser(values)
            handleView()
            setValues({})
        }
    }

    const handleChange = ({target}) => {
        const { name, value } = target
        setValues({...values, [name]: value})
    }

    const handleBack = e => {
        e.preventDefault()
        setValues({})
        handleView()
    }

    return(
        <div className={styles.wrapper_form}>
            <Header title={'User Form App'}/>
            <span className={`tag is-primary is-light ${styles.btn_back}`}>
                <a 
                onClick={handleBack}
                title="back" 
                href="/">Back</a>
            </span>
            <form 
            onSubmit={handleSubmit}
            className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.sr_only}>Users Form</legend>
                    <div className="field">
                        <label htmlFor="first_name" className="label has-text-left">Name</label>
                        <div className="control has-icons-left">
                            <input 
                            defaultValue={first_name}
                            onChange={handleChange}
                            id="first_name"
                            className="input" 
                            type="text" 
                            name="first_name" 
                            placeholder="Name"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                        {fails.first_name && <p className="has-text-left help is-danger">{fails.first_name}</p>}
                    </div>
                    <div className="field">
                        <label htmlFor="last_name" className="label has-text-left">Last Name</label>
                        <div className="control has-icons-left">
                            <input 
                            defaultValue={last_name}
                            onChange={handleChange}
                            id="last_name"
                            className="input" 
                            type="text" 
                            name="last_name" 
                            placeholder="Last Name"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                        {fails.last_name && <p className="has-text-left help is-danger">{fails.last_name}</p>}
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="label has-text-left">Email</label>
                        <div className="control has-icons-left">
                            <input 
                            defaultValue={email}
                            onChange={handleChange}
                            id="email"
                            className="input" 
                            type="email" 
                            name="email" 
                            placeholder="email@email.com"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                        {fails.email && <p className="has-text-left help is-danger">{fails.email}</p>}
                    </div>
                    <div className="field">
                        <label htmlFor="avatar" className="label has-text-left">Url Avatar Image</label>
                        <div className="control has-icons-left">
                            <input 
                            defaultValue={avatar}
                            onChange={handleChange}
                            id="avatar"
                            className="input" 
                            type="text" 
                            name="avatar" 
                            placeholder="https://www.image.com"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-camera"></i>
                            </span>
                        </div>
                        {fails.avatar && <Fragment><p className={`has-text-left help is-danger ${styles.break}`}>{fails.avatar} like this:</p>
                        <p className={`has-text-left help has-text-info ${styles.break}`}>
                                {fakeImage()}
                        </p>
                        </Fragment>}
                    </div>
                    <div className="field">
                        <button className="button is-primary is-pulled-right">Enviar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

UserForm.propTypes = {
    handleView: PropTypes.func.isRequired,
    handleNewUser: PropTypes.func.isRequired,
    userSelected: PropTypes.object.isRequired, 
    handleUpdateUser: PropTypes.func.isRequired
}

export default UserForm