const validate = (param) => {
    const errors = {}
    if(!param.first_name){
        errors.first_name = 'The name field is required'
    }
    if(!param.last_name){
        errors.last_name = 'The last name field is required'
    }
    if(!param.email){
        errors.email = 'the email field is required'
    }
    if(!param.avatar){
        errors.avatar = 'You need to include a url for the avatar image'
    }
    return errors
}

export default validate