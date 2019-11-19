import React from 'react'
import { connect } from 'react-redux'
 
const Confirmation = (props) => {

    const {
        user,
        history
    } = props


    return (
        <div>
            <h3>Thank you for signing up, {user.firstName}!</h3>
            <h4>Have a great day.</h4>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.signup
})

export default connect(mapStateToProps)(Confirmation)