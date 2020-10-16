import React, { Fragment } from 'react'

import classes from './Spinner.module.css'
const Spinner = (props) => {
    return (
        <Fragment>
            <div className={classes.loader}>Loading...</div>
        </Fragment>
    )
}

export default Spinner
