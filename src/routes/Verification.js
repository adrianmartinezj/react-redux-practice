import React from 'react'
import { connect } from 'react-redux'

const Verification = (props) => {

    return (
        <div>
            Verify
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state:', state)
    return {}
}

export default  connect(mapStateToProps)(Verification)