import React, {useEffect} from 'react'
import validator from '../../validators'
import allactions from '../../actions'
import {useSelector, useDispatch} from 'react-redux'

const Person =({id, name, position, phone, email, colWidth, callback, errors, displayStyle}) => {
    const getValidationResult = (value, requiredOrNot, type) => {
        switch(type){
            case 'string':
                return validator.stringValidator(value, requiredOrNot)
            case 'date': 
                return validator.dateValidator(value, requiredOrNot)
            case 'number':
                return validator.numberValidator(value, requiredOrNot, false)
            case 'year':
                return validator.yearValidator(value, requiredOrNot)
        }
    }
    
    const populateErrors = (fieldName, value, requiredOrNot, valueType) => {
        const result = getValidationResult(value, requiredOrNot, valueType)
        if(result) {
            let shadow = {...errors}
            shadow[fieldName] = result
            callback(shadow)
        }else{
            if(errors[fieldName]){
                let shadow = {...errors}
                delete shadow[fieldName] 
                callback(shadow) 
            }
            
        }
    }
    const cohort = useSelector(state => state.cohortReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allactions.cohortActions.completerName(cohort.completerName))
    }, [])

    return <div id={id} className={'col-md-'+colWidth}>                           
            <div className='col-md-12'>
                <span className='col-md-4' style={{lineHeight: '2em', paddingLeft: '0'}}>Name</span>
                <span className='col-md-8'>
                    <input className='form-control' name={name} value={cohort[name]} onChange={e => dispatch(allactions.cohortActions[name](e.target.value))} onBlur={(e) => {populateErrors(name, e.target.value, true, 'string')}}/>
                </span>
            </div>
            {errors[name] ? <div><span className='col-md-offset-4 col-md-8' style={{color: 'red', display: displayStyle}}>{errors[name]}</span></div> : ''}
            <div  className='col-md-12'>
                <span className='col-md-4' style={{paddingLeft: '0'}}>Position with the cohort</span>
                <span className='col-md-8'>
                    <input className='form-control' name={position} value={cohort[position]} onChange={e => dispatch(allactions.cohortActions[position](e.target.value))} onBlur={(e) => {populateErrors(position, e.target.value, true, 'string')}}/>
                </span>
            </div>
            {errors[position] ? <div><span className='col-md-offset-4 col-md-8' style={{color: 'red', display: displayStyle}}>{errors[position]}</span></div> : ''}
            <div  className='col-md-12'>
                <span className='col-md-4' style={{lineHeight: '2em', paddingLeft: '0'}}>Phone</span>
                <span className='col-md-8'>
                    <input className='form-control' type='phone' name={phone} value={cohort[phone]} onChange={e => dispatch(allactions.cohortActions[phone](e.target.value))} onBlur={(e) => {populateErrors(phone, e.target.value, true, 'string')}}/>
                </span>
            </div>
            {errors[phone] ? <div><span className='col-md-offset-4 col-md-8' style={{color: 'red', display: displayStyle}}>{errors[phone]}</span></div> : ''}
            <div className='col-md-12'>
                <span className='col-md-4' style={{lineHeight: '2em', paddingLeft: '0'}}>Email</span>
                <span className='col-md-8'>
                    <input className='form-control' type='phone' name={email} value={cohort[email]} onChange={e => dispatch(allactions.cohortActions[email](e.target.value))} onBlur={(e) => {populateErrors(email, e.target.value, true, 'string')}}/>
                </span>
            </div>
            {errors[email] ? <div><span className='col-md-offset-4 col-md-8' style={{color: 'red', display: displayStyle}}>{errors[email]}</span></div> : ''} 
        </div>
}

export default Person