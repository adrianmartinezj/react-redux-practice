import React from 'react'
import { connect } from 'react-redux'
import classes from '../css/Verification.module.css'

const Verification = (props) => {
    const {
        user,
        history
    } = props
    
    const handleCorrection = (e) => {
        history.push('/')
    }

    const handleConfirm = (e) => {
        history.push('/confirm')
    }

    return (
        <div className={classes.mainContainer}>
            <h3>Take a moment to ensure your information is correct.</h3>
            <label>First Name</label>
            <input value={user.firstName}/>
            <label>Last Name</label>
            <input value={user.lastName} />
            <label>Username</label>
            <input value={user.userName} />
            <label>E-mail</label>
            <input value={user.email} />
            <div>
                <button onClick={handleCorrection}>Correct Information</button>
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.signup
})
export default  connect(mapStateToProps)(Verification)