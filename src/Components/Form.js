import React, { Component } from 'react';
import classes from '../App.css';
import useForm from '../Containers/useForm';
import Validate from './formValidate';

const Form =()=>{
   const { handleChange, values, handleSubmit, errors}= useForm(Validate)
    
   
        return(
            <div className={classes.wrapper}>
             <div className={classes.formwrapper}>
                 <h1>Create Account</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.firstName}>
                    <label >First Name</label>
                    <input type="text" name="firstname" placeholder="First Name" value={values.firstname} onChange={handleChange}></input>
                  
                </div>
        {errors.firstname && <p className={classes.errorMessage}>{errors.firstname}</p>}
                
                <div className={classes.lastName}>
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name" value={values.lastname} onChange={handleChange}></input>
                    
                </div>
                {errors.lastname && <p className={classes.errorMessage}>{errors.lastname}</p>}
                <div className={classes.email}>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}></input>
                    
                </div>
                {errors.email && <p className={classes.errorMessage}>{errors.email}</p>}
                <div className={classes.password}>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}></input>
                  
                </div>
                {errors.password && <p className={classes.errorMessage}>{errors.password}</p>}
                <div className={classes.createAccount}>
                    <button type="submit">Create Account</button>
                </div>
            </form>
            </div>
            </div>   
            
        )
    
}   


export default Form;