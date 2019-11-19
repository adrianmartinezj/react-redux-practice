import React from 'react'
import classes from '../css/Landing.module.css'

const Landing = (props) => {
    const handleSubmit = (e) => {
        console.log('e.target.value')
    }

    return (
        <div className={classes.mainContainer}>
            Welcome
            <form className={classes.formContainer} onSubmit={handleSubmit}>
                <label>First Name</label>
                <input />
                <label>Last Name</label>
                <input />
                <label>Username</label>
                <input />
                <label>E-mail</label>
                <input />
                <label>Password</label>
                <input type='password'/>
                <label>Confirm Password</label>
                <input type='password'/>
            </form>
        </div>
    )
}

export default Landing