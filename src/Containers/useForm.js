import {useState, useEffect} from 'react';
import Validate from '../Components/formValidate';

const useForm=()=>{
    const [values, setValues]=useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const [errors, setErrors]=useState({});

    const handleChange=(event)=>{
        const {name, value}= event.target
        setValues({...values, [name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setErrors(Validate(values))
    
    }

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;