import React, {
    useState,
} from 'react'
import classes from '../css/Landing.module.css'

const Landing = (props) => {
    const [formSubmission, setFormSubmission] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    })

    const [confirmPassword, setConfirmPasssword] = useState('')

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
    }

    const handleClear = (e) => {
        setFormSubmission({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
        })
        e.preventDefault();
    }

    const modifyFormSubmission = (e, type) => {
        let newFormSubmission = {...formSubmission}
        newFormSubmission[type] = e.target.value
        setFormSubmission(newFormSubmission)
    }

    const handlePasswordCheck = (e) => {
        setConfirmPasssword(e.target.value)
    }

    return (
        <div className={classes.mainContainer}>
            Welcome
            <form className={classes.formContainer} onSubmit={handleSubmit}>
                <label>First Name</label>
                <input value={formSubmission.firstName} onChange={(e) => {modifyFormSubmission(e, 'firstName')}} />
                <label>Last Name</label>
                <input value={formSubmission.lastName} onChange={(e) => {modifyFormSubmission(e, 'lastName')}} />
                <label>Username</label>
                <input value={formSubmission.userName} onChange={(e) => {modifyFormSubmission(e, 'userName')}} />
                <label>E-mail</label>
                <input value={formSubmission.email} onChange={(e) => {modifyFormSubmission(e, 'email')}} />
                <label>Password</label>
                <input value={formSubmission.password} onChange={(e) => {modifyFormSubmission(e, 'password')}} type='password'/>
                <label>Confirm Password</label>
                <input onChange={handlePasswordCheck} type='password'/>
                {formSubmission.password.length > 0 ? confirmPassword !== formSubmission.password ? <label>Password does not match</label> : <label>Passwords match</label> : null}
                <div>
                    <button>Submit</button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Landing