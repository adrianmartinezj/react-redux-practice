import React, {
    useState,
    useEffect,
} from 'react'
import { connect } from 'react-redux'
import { setUser } from '../store/signup/actions'
import classes from '../css/Landing.module.css'

const Landing = (props) => {

    const {
        setUser,
        user,
    } = props

    const [formSubmission, setFormSubmission] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    })

    const [confirmPassword, setConfirmPasssword] = useState('')

    const [blankField, setBlankField] = useState(false)

    useEffect(() => {
        if (user !== null && user !== undefined)
            setFormSubmission(user)
    }, [user])

    const handleSubmit = (e) => {
        if (confirmPassword !== formSubmission.password) {
            e.preventDefault();
            return
        }
        let blank  = false
        Object.keys(formSubmission).forEach(element => {
            if (formSubmission[element] === '')
                blank = true
        });
        if (blank) {
            setBlankField(blank)
            e.preventDefault();
            return
        }
        e.preventDefault();
        e.stopPropagation();
        setUser(formSubmission)
        props.history.push('/verify')
    }

    const handleClear = (e) => {
        setFormSubmission({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
        })
        setConfirmPasssword('')
        e.preventDefault();
    }

    const modifyFormSubmission = (e, type) => {
        setBlankField(false)
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
                <input value={confirmPassword} onChange={handlePasswordCheck} type='password'/>
                {formSubmission.password.length > 0 ? confirmPassword !== formSubmission.password ? <label>Password does not match</label> : <label>Passwords match</label> : null}
                {blankField ? <label>One or more fields is blank</label> : null}
                <div>
                    <button>Submit</button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.signup
})

const mapDispatchToProps = dispatch => {
    return {
        setUser: user => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)