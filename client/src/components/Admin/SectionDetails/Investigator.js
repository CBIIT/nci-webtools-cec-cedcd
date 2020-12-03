import React from 'react'
import allactions from '../../../actions'
import validator from '../../../validators'
import { useSelector, useDispatch } from 'react-redux'
import './Investigator.css'

const Investigator = ({ id, name, institution, email, isRequired, callback, handleRemove, errors, displayStyle }) => {
    const getValidationResult = (value, requiredOrNot, type) => {
        switch (type) {
            case 'phone':
                return validator.phoneValidator(value)
            /*
            case 'date': 
                return validator.dateValidator(value, requiredOrNot)
            case 'number':
                return validator.numberValidator(value, requiredOrNot, false)
            case 'year':
                return validator.yearValidator(value, requiredOrNot)
            case 'url': 
                return validator.urlValidator(value)
            */
            case 'email':
                return validator.emailValidator(value)
            default:
                return validator.stringValidator(value, requiredOrNot)
        }
    }

    const populateErrors = (fieldName, value, requiredOrNot, valueType) => {
        const result = getValidationResult(value, requiredOrNot, valueType)
        if (result) {
            let shadow = { ...errors }
            shadow[fieldName] = result
            callback(shadow)
        } else {
            if (errors[fieldName]) {
                let shadow = { ...errors }
                delete shadow[fieldName]
                callback(shadow)
            }

        }
    }

    const cohort = useSelector(state => state.cohortReducer)
    const dispatch = useDispatch()
    const idx = id.split('_')[1]

    return <div id={id} className='col-md-12' style={{ paddingLeft: '0', marginBottom: '15px' }}>
        <div className='col-md-12  invheader'>
            {idx === '0' ? <span>Investigator</span> : <span>Addition Investigator</span>}
            {idx !== '0' ? <span className='invclose' onClick={() => handleRemove(idx)}>x</span> : ''}
        </div>
        <div className='col-md-12' style={{ border: '1px solid lightgray' }}>
            <div className='col-md-12' style={{ paddingLeft: '0', marginTop: '5px', marginBottom: '5px' }}>
                <span className='col-md-2' style={{ lineHeight: '2em', paddingLeft: '0' }}>Name<span style={{ color: 'red' }}>*</span></span>
                <span className='col-md-9'>
                    <input className='form-control' name={name} value={cohort.investigators[idx].name} readOnly />
                </span>
            </div>
            <div className='col-md-12' style={{ paddingLeft: '0', marginBottom: '4px' }}>
                <span className='col-md-2' style={{ lineHeight: '2em', paddingLeft: '0' }}>Institution<span style={{ color: 'red' }}>*</span></span>
                <span className='col-md-9'>
                    <input className='form-control' name={institution} value={cohort.investigators[idx].institution} readOnly />
                </span>
            </div>
            <div className='col-md-12' style={{ paddingLeft: '0', marginBottom: '4px' }}>
                <span className='col-md-2' style={{ lineHeight: '2em', paddingLeft: '0' }}>Email<span style={{ color: 'red' }}>*</span></span>
                <span className='col-md-9'>
                    <input className='form-control' type='email' name={email} value={cohort.investigators[idx].email} readOnly />
                </span>
            </div>
        </div>
    </div>
}

export default Investigator