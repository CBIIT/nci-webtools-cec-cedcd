const minAgeValidator = (value, isRequired, maxAge) => {
    if(isRequired && !value)
        return 'Please provide a value'
    else if(!/^\s*[1-9][0-9][0-9]?\s*$/.test(value))
        return 'Invalid age'
    else{
        if(maxAge && parseInt(value) > parseInt(maxAge))
            return 'Invalid min age'
    }
}

export default minAgeValidator