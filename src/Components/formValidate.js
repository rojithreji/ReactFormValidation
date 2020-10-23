export default function formValidate(values){
    let errors = {}
    if(!values.firstname.trim()){
        errors.firstname = '*First Name Required'
    } 
    if(!values.lastname.trim()){
        errors.lastname = '*Last Name Required'
    } 
    if(!values.email.trim()){
        errors.email = '*Email Required'
    } 
    if(!values.password.trim()){
        errors.password = '*Password Required'
    } 
     

    return errors;

}