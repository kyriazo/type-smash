import React from 'react';
import classes from './Typearea.module.css';

const typearea = (props)=> {
    return (
            <input id='typearea' onChange={props.clicked} className={classes.typedWords} type='text'  value={props.value} />
    )
}

export default typearea;
